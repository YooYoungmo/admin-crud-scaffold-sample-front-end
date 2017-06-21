export config from './config';

const isLogin = () => {
  return sessionStorage.getItem('userName') && sessionStorage.getItem('accessToken');
};


const setLoginIn = (userName, accessToken) => {
  sessionStorage.setItem('userName', userName);
  sessionStorage.setItem('accessToken', accessToken);
};

const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};

export {
  isLogin,
  setLoginIn,
  getAccessToken,
};
