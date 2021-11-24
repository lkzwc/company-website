import fetch from 'dva/fetch';

function parseJSON(response) {
  var info =response.json()
  return info;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseRes(res){
  var { state, body } = res;
  return body;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  
  const {method ,data} = options;

  var headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  headers.append("X-HTTP-Method-Override", method);

  options={
    method,
    headers,
    data
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(parseRes)
    .catch(err => ({ err }));
}
