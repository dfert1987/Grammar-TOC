import { envs } from '../constants';

const ED_LOGIN_AUTH_KEY = `com.hmhco.security.openID.authInfo.${
  envs[window.location.hostname]
}`;

const getSessionStorageToken = () => {
  return window.sessionStorage.getItem(ED_LOGIN_AUTH_KEY);
};

const getLocalStorageToken = () => {
  return window.localStorage.getItem(ED_LOGIN_AUTH_KEY);
};

export const getSifToken = async () => {
  const rawToken = getSessionStorageToken() || getLocalStorageToken();

  const parsedToken = JSON.parse(rawToken);

  const {
    sif: { accessToken },
  } = parsedToken;

  return accessToken;
};
