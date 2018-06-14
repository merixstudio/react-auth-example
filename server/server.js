const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { parse } = require('querystring');

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




jwtRoute.post('/create', (request, res) => {
  const token = getToken();
  console.log(request.body, token);

  res.send({ token });
});

// auth/jwt/create/
// auth/me/
// v1/auth/jwt/refresh/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/v1', v1Route);
v1Route.use('/auth', authRoute);
authRoute.use('/jwt', jwtRoute);

app.listen(4000, () => console.log('Example app listening on port 4000!'));

//const token = getToken();
