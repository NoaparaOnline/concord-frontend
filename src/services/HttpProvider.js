import axios from "axios";
import { toast } from "react-toastify";
import { getToken, logout } from "../Utils/auth.util";
// const BASE_URL = "prod link";
// https://dmfr-backend.herokuapp.com/api/v1/
// https://concord-backend-m1.herokuapp.com/
let BASE_URL = ''
const DEV_API_URL = "https://concord-backend-m2.herokuapp.com/api";

const PROD_API_URL = "https://concordpharma-bd.com/api";
const LOCAL_API_URL = "https://concordpharma-bd.com/api";
if (window.location.origin === 'https://concordpharma-bd.com' || window.location.origin === 'https://www.concordpharma-bd.com' || window.location.origin === 'www.concordpharma-bd.com') BASE_URL = PROD_API_URL
else if (window.location.origin === 'https://concord-web.herokuapp.com' || window.location.origin === 'https://www.concord-web.herokuapp.com/' || window.location.origin === 'www.concord-web.herokuapp.com/') BASE_URL = DEV_API_URL
else BASE_URL = PROD_API_URL;

export const BASEURL = BASE_URL

// const BASE_URL = "https://concord-backend-m2.herokuapp.com/api";
// const BASE_URL = "https://concord-backend-prod.herokuapp.com/api";

export async function getApiRequestHeader() {
  const authToken = await getToken();
  const key = authToken?.key || "";
  const type = authToken?.type || "";
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-session-key": key,
    "x-session-type": type,
  };
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 180000,
  withCredentials: false,
});

export async function updateHeaders() {
  const header = await getApiRequestHeader();
  instance.defaults.headers = header;
}

export async function request({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;

    if (
      response?.data?.response_code === 403 ||
      response?.data?.response_code === 401
    ) {
      toast.error(response?.data?.response_message);
      // setTimeout(() => {
      //   logout();
      //   window.location.href = "/";
      // }, 2000);
    }
  } catch (error) {
    throw error.response;
  }

  return response;
}
export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  if (
    response.status
      ? response.status.toString().indexOf("2") !== 0
      : response.data.status.toString().indexOf("2") !== 0
  ) {
    // eslint-disable-next-line
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  for (var key in params) {
    url = url + "" + params[key];
  }
  return request({ method: "get", url, data: featureAndAction, ...config });
}

export async function del(url, params, config) {
  return request({ method: "delete", url, data: { params }, ...config });
}

export async function post(url, data, featureAndAction, config) {
  return request({ method: "post", url, data, ...config });
}

export async function put(url, data, config) {
  return newRequest({ method: "put", url, data, ...config });
}
export async function patch(url, data, config) {
  return newRequest({ method: "patch", url, data, ...config });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
