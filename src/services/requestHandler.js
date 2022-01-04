import { get, patch, post, put } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  login: "users/login/web",
  resetPassword: "users/reset-password",
  forgotPassword: "users/forgot-password",
  changePassword: "users/change-password",
  logout: "users/logout",
  getoldOrders: "orders/read/old",
  getOrders: "orders/read",
  getnewOrders: "orders/read/new",
  getStocksProducts: "stocks/read",
  getStocksMedicineProducts: "stocks/read/medicine",
  getStocksGiftProducts: "stocks/read/gift",
  statusChanges: "orders/status-update",
  getSchedules: "schedules/read",
  addSchedules: "schedules/create",
  SchedulesApprovalStatusChanges: "schedules/status",
  getSM: 'users/read/sm',
  
  // getdoctors: "doctors/read",
  // getcustomers: "customers/read",
  // getassignedto: "fieldstaffs/childs",
  getproductsall: "products/read/medicine",
  getproductsnew: "products/read/medicine/new",
  getdepartmenthead: "department_heads/read",
  getdistributioncenter: "distribution_centres/read",
  getallNotification: "notifications/read",
  // seeAllNotification: "notifications/read",
  seeAllNotification: "notifications/read?is_seen=1",
  getAllThana: "region-classifications/read-thanas",
  childSm:'fieldstaffs/childs/sm',
  getdoctors: 'doctors/read',

};

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });

const logout = () =>
  post(SERVICE_URLS.logout, {}, { feature: featureConstants.login });

const resetPassword = (data) =>
  patch(SERVICE_URLS.resetPassword, data, {
    feature: featureConstants.static,
  });

  const changePassword = (data) =>
  patch(SERVICE_URLS.changePassword, data, {
    feature: featureConstants.static,
  });
const forgotPassword = (data) =>
  post(SERVICE_URLS.forgotPassword, data, { feature: featureConstants.static });

//  DepoManager Api Function
const getoldOrders = () =>
  get(SERVICE_URLS.getoldOrders, {}, { feature: featureConstants.static });

const getOrders = () =>
  get(SERVICE_URLS.getOrders, {}, { feature: featureConstants.static });

const getnewOrders = () =>
  get(SERVICE_URLS.getnewOrders, {}, { feature: featureConstants.static });

const getStocksProducts = () =>
  get(SERVICE_URLS.getStocksProducts, {}, { feature: featureConstants.static });

const getStocksMedicineProducts = () =>
  get(
    SERVICE_URLS.getStocksMedicineProducts,
    {},
    { feature: featureConstants.static }
  );

const getStocksGiftProducts = () =>
  get(
    SERVICE_URLS.getStocksGiftProducts,
    {},
    { feature: featureConstants.static }
  );

const statusChanges = (data) =>
  put(SERVICE_URLS.statusChanges, data, { feature: featureConstants.static });
//============================

//Director Api Function
// const getSchedules = () =>
//   get(SERVICE_URLS.getSchedules, {}, { feature: featureConstants.static });

const addSchedules = (data) =>
  post(SERVICE_URLS.addSchedules, data, {
    feature: featureConstants.static,
  });

const SchedulesApprovalStatusChanges = (data) =>
  put(SERVICE_URLS.SchedulesApprovalStatusChanges, data, {
    feature: featureConstants.static,
  });

  // const getdoctors = (data) =>
  // get(SERVICE_URLS.getdoctors, "",data, { feature: featureConstants.static });

  // const getcustomers = (data) =>
  // get(SERVICE_URLS.getcustomers, "",data, { feature: featureConstants.static });

  // const getassignedto = () =>
  // get(SERVICE_URLS.getassignedto, {}, { feature: featureConstants.static });

  const getproductsall = () =>
  get(SERVICE_URLS.getproductsall, {}, { feature: featureConstants.static });

  const getproductsnew = () =>

  get(SERVICE_URLS.getproductsnew, {}, { feature: featureConstants.static });

  const getdepartmenthead = () =>
  get(SERVICE_URLS.getdepartmenthead, {}, { feature: featureConstants.static });

  const getdistributioncenter = () =>
  get(SERVICE_URLS.getdistributioncenter, {}, { feature: featureConstants.static });


  const getallNotification = () =>
  get(SERVICE_URLS.getallNotification, {}, {
    feature: featureConstants.static,
  });
  const seeAllNotification = () =>
  get(SERVICE_URLS.seeAllNotification, {}, {
    feature: featureConstants.static,
  });

  const getAllThana = () => 
    get(SERVICE_URLS.getAllThana, {}, {
      feature:featureConstants.static
    });

    const getSm = async () =>
  get(
    SERVICE_URLS.getSM,
    {},
    {
      feature: featureConstants.static,
    }
  );
  const getChildSm = async () =>
  get(
    SERVICE_URLS.childSm,
    {},
    {
      feature: featureConstants.static,
    }
  );

  const getstocksofSm = (uid) =>
  get(SERVICE_URLS.getStocksMedicineProducts + `?child_uid=${uid}`, { feature: featureConstants.static });
  const getsmdoctors = (uid) =>
  get(SERVICE_URLS.getdoctors + `?child_uid=${uid}`, { feature: featureConstants.static });
//=========================

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
  getStocksMedicineProducts,
  getStocksGiftProducts,
  // getSchedules,
  changePassword,
  addSchedules,
  SchedulesApprovalStatusChanges,
  // getdoctors,
  // getcustomers,
  // getassignedto,
  getproductsall,
  getproductsnew,
  getdepartmenthead,
  getdistributioncenter,
  getallNotification,
  seeAllNotification,
  getAllThana,
  getSm,
  getChildSm,
  getsmdoctors,
  getstocksofSm
};
export default apiServices;
