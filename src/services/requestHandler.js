import { get, patch, post, put } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  login: "users/login/web",
  resetPassword: "users/reset-password",
  forgotPassword: "users/forgot-password",
};

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });
const resetPassword = (data) =>
  patch(SERVICE_URLS.resetPassword, data, {
    feature: featureConstants.static,
  });
const forgotPassword = (data) =>
  post(SERVICE_URLS.forgotPassword, data, { feature: featureConstants.static });


const apiServices = {
  // define variables
  login,
  resetPassword,
  forgotPassword,
};
export default apiServices;
