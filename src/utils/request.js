import { message } from 'antd';
import fetch from 'dva/fetch';


function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function handleError(error) {
  const url = error.response.url;
  if (url.indexOf('/account') !== -1) {
    message.error('密码不正确 or 用户不存在');
  }

  return { success: false };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

  // return fetch(url, options)
  //   .then(checkStatus)
  //   .then(handelData)
  //   .catch(handleError)
  //
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(handleError);
}
