import {
  directorConstants,
  LOADER_CONSTANT,
  VIEW_RSM_CONSTANT,
  VIEW_SM_CONSTANT,
  VIEW_USER_CONSTANT,
} from "../Constants/directorConstant";
const initialState = {
  schedule: [],
  doctor: [],
  customer: [],
  assignedto: [],
  approvaluid: [],
  productall: [],
  productnew: [],
  distributioncenter: [],
  departmenthead: [],
  assignedtorsm: [],
  assignedtoam: [],
  assignedtompo: [],
  scheduleidstate: [],
  getsingleproductobj: [],
  getsingledistributionobj: [],
  getsingledistributionobjall: [],
  getsingledistributionobjmedicine: [],
  getsingledistributionobjgift: [],
  loadingSm: false,
  loadingAm: false,
  loadingRsm: false,
  loadingMpo: false,
  sm: null,
  rsm: [],
  am: [],
  mpo: [],
  salesManager: [],
  regionalSalesManager: [],

  loading: false,
};
export const directorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case directorConstants.GET_SCHEDULE:
      return { ...state, schedule: payload };
    case directorConstants.GET_DOCTOR:
      return { ...state, doctor: payload };
    case directorConstants.GET_CUSTOMER:
      return { ...state, customer: payload };
    case directorConstants.GET_ASSIGNED_TO:
      return { ...state, assignedto: payload };
    case directorConstants.GET_UID_APPROVAL:
      return { ...state, approvaluid: payload };
    case directorConstants.GET_PRODUCTS_ALL:
      return { ...state, productall: payload };
    case directorConstants.GET_PRODUCTS_NEW:
      return { ...state, productnew: payload };
    case directorConstants.GET_DISTRIBUTION_CENTER:
      return { ...state, distributioncenter: payload };
    case directorConstants.GET_DEPARTMENT_HEAD:
      return { ...state, departmenthead: payload };
    case directorConstants.GET_ASSIGNED_TO_RSM:
      return { ...state, assignedtorsm: payload };
    case directorConstants.GET_ASSIGNED_TO_AM:
      return { ...state, assignedtoam: payload };
    case directorConstants.GET_ASSIGNED_TO_MPO:
      return { ...state, assignedtompo: payload };
    case directorConstants.GET_SCHEDULE_SINGLE_UID:
      return { ...state, scheduleidstate: payload };
    case directorConstants.GET_SINGLE_PRODUCT_OBJ:
      return { ...state, getsingleproductobj: payload };
    case directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ:
      return { ...state, getsingledistributionobj: payload };
    case directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_ALL:
      return { ...state, getsingledistributionobjall: payload };
    case directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_MED:
      return { ...state, getsingledistributionobjmedicine: payload };
    case directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_GIFT:
      return { ...state, getsingledistributionobjgift: payload };
    case LOADER_CONSTANT.SM_LOADING:
      return { ...state, loadingSm: payload };
    case LOADER_CONSTANT.AM_LOADING:
      return { ...state, loadingAm: payload };
    case LOADER_CONSTANT.RSM_LOADING:
      return { ...state, loadingRsm: payload };
    case LOADER_CONSTANT.MPO_LOADING:
      return { ...state, loadingMpo: payload };
    case VIEW_USER_CONSTANT.GET_SM:
      return { ...state, sm: payload };
    case VIEW_USER_CONSTANT.GET_RSM:
      return { ...state, rsm: payload };
    case VIEW_USER_CONSTANT.GET_AM:
      return { ...state, am: payload };
    case VIEW_USER_CONSTANT.GET_MPO:
      return { ...state, mpo: payload };
      case VIEW_SM_CONSTANT.VIEW_SM_LOADING:
      return { ...state, loading: payload };
    case VIEW_SM_CONSTANT.VIEW_SM_SUCCESS:
      return { ...state, salesManager: payload };
    case VIEW_SM_CONSTANT.VIEW_SM_ERROR:
      return { ...state, loading: payload };
      case VIEW_RSM_CONSTANT.VIEW_RSM_LOADING:
        return { ...state, loading: payload };
      case VIEW_RSM_CONSTANT.VIEW_RSM_SUCCESS:
        return { ...state, regionalSalesManager: payload };
      case VIEW_RSM_CONSTANT.VIEW_RSM_ERROR:
        return { ...state, loading: payload };
    default:
      return state;
  }
};
