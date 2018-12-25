const stream = weex.registerModule('stream');

function parseResponseData (data) {
  if (typeof data === 'string') {
    return JSON.parse(data);
  }
  return data;
}

/**
 *
 * @param {String} method 请求方式： GET/POST
 * @param {String} url 请求地址
 * @param {Object} headers HTTP 请求头
 * @param {String} type 响应类型, json, text 或是 jsonp {在原生实现中其实与 json 相同)
 * @param {String} body HTTP 请求体
 * @param {Function} progressCallback 关于请求状态的回调
 */
function request (method, url, headers, type, body, progressCallback) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: method,
      url: url,
      headers: headers,
      type: type,
      body: body,
      callback: function (response) {
        console.log(`reseponse ==> ${response}`);
        const status = response && response.status;
        if (status === 200) {
          resolve(parseResponseData(response.data));
        } else {
          reject(response && response.data);
        }
      },
      progressCallback: progressCallback
    });
  })
}

const defaultRequestHeader = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const postRequestHeader = {
  'Content-Type': 'application/json'
}

/**
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 * @param {Function} progressCallback 关于请求状态的回调
 */
const server = {
  GET: function (url, param, progressCallback) {
    if (param) {
      const array = [];
      for (let key in param) {
        array.push(`${key}=${param[key]}`)
      }
      url = `${url}?${array.join('&')}`;
    }
    return request('GET', url, defaultRequestHeader, 'json', null, progressCallback);
  },
  POST: function (url, param, progressCallback) {
    let body = null;
    if (param) {
      const array = [];
      for (let key in param) {
        array.push(`${key}=${param[key]}`)
      }
      body = array.join('&');
    }
    return request('POST', url, postRequestHeader, 'json', body, progressCallback);
  }
}

export default server;
