import axios from 'axios';

const AXIOS_CONFIG = {
  baseURL: "https://ancient-spire-15588.herokuapp.com/",
  timeout: 5000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Authorization',
  },
};

const getPublicInstance = (additionalHeaders) => {
  return axios.create({
    ...AXIOS_CONFIG,
    headers: {
      ...AXIOS_CONFIG.headers,
      ...additionalHeaders
    }
  });
}

const getInstance = (additionalHeaders) => {
  const token = window.localStorage.getItem("usertoken");
  if (token === null) {
    return getPublicInstance();
  }
  if (!additionalHeaders) {
    additionalHeaders = {};
  }
  return axios.create({
    ...AXIOS_CONFIG,
    headers: {
      ...AXIOS_CONFIG.headers,
      Authorization: token,
      ...additionalHeaders
    }
  });
}

export default getInstance;