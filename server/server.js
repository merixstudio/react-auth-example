const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

function getToken(minutes = 5, secretKey = 'merix') {
  const iat = Math.floor(Date.now() / 1000);

  return jwt.sign(
    {
      orig_iat: iat,
      exp: iat + minutes * 60,
    },
    secretKey,
    { noTimestamp: true }
  );
}

const app = express();
const v1Route = express.Router();
const authRoute = express.Router();
const jwtRoute = express.Router();

const user = {
  email: 'you@shall.not',
  password: 'pass',
  name: 'Merix Developer',
  role: 'Frontend',
  token: null,
};

jwtRoute.post('/create', ({ body: { email, password } = {} }, response) => {
  if (email === user.email && password === user.password) {
    const token = getToken();

    user.token = token;
    response.send({ token });
  } else {
    response.status(404).send({ non_field_errors: 'Cannot login with given credentials.' });
  }
});

jwtRoute.post('/refresh', ({ body: { token: oldToken } = {} }, response) => {
  if (oldToken === user.token) {
    const token = getToken();

    user.token = token;
    response.send({ token });
  } else {
    response.status(401).end();
  }
});

authRoute.post('/me', (request, response) => {
  if (request.get('Authorization') === `JWT ${user.token}`) {
    response.send({
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } else {
    response.status(401).end();
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/v1', v1Route);
v1Route.use('/auth', authRoute);
authRoute.use('/jwt', jwtRoute);

app.listen(4000, () => console.log('Example app listening on port 4000!'));
