import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export function tokenExpired(token) {
  if (!token) return true;

  const { exp } = jwtDecode(token);

  return exp - Math.floor(Date.now() / 1000) <= 0;
}

export function tokenCloseToExpiry(token) {
  if (!token) return false;

  const { exp, orig_iat } = jwtDecode(token);

  return (
    (exp - orig_iat) / 2 > exp - Math.floor(Date.now() / 1000) &&
    !!Cookies.get('token')
  );
}

export function setToken(token) {
  Cookies.set('token', token, { expires: 365 });
}

export function clearToken() {
  Cookies.remove('token');
}

export function getToken() {
  return Cookies.get('token');
}
