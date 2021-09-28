import { get, patch, post,put } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  login: "users/login/web",
  resetPassword: "users/reset-password",
  forgotPassword: "users/forgot-password",
  logout: "users/logout",
  getoldOrders: 'orders/read/old',
  getOrders: 'orders/read',
  getnewOrders: 'orders/read/new',
  getStocksProducts: 'products/read',
  statusChanges:'orders/status-update',
};

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });

  const logout = () =>
  post(SERVICE_URLS.logout, {}, { feature: featureConstants.login });

  const resetPassword = (data) =>
  patch(SERVICE_URLS.resetPassword, data, {
    feature: featureConstants.static,
  });
const forgotPassword = (data) =>
  post(SERVICE_URLS.forgotPassword, data, { feature: featureConstants.static });

  const getoldOrders = () =>
  get(SERVICE_URLS.getoldOrders, {}, { feature: featureConstants.static });
  
  const getOrders = () =>
  get(SERVICE_URLS.getOrders, {}, { feature: featureConstants.static });

  const getnewOrders = () =>
  get(SERVICE_URLS.getnewOrders, {}, { feature: featureConstants.static });

const getStocksProducts = () =>
  get(SERVICE_URLS.getStocksProducts, {}, { feature: featureConstants.static });

const statusChanges = (data) =>
  put(SERVICE_URLS.statusChanges, data, { feature: featureConstants.static });



const apiServices = {
  // define variables
  login,
  resetPassword,
  forgotPassword,
  logout,
  getoldOrders,
  getnewOrders,
  getOrders,
  getStocksProducts,
  statusChanges,
  getOrders
};
export default apiServices;
