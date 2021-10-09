import { directorConstants } from "../Constants/directorConstant";
const initialState = {
    schedule : [],
    doctor: [],
    customer : [] ,
    assignedto: [],
    approvaluid:[],
    productall:[], 
    productnew:[], 
    distributioncenter:[], 
    departmenthead:[],
    assignedtorsm: [], 
    assignedtoam: [], 
    assignedtompo: [], 
};
export const directorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case directorConstants.GET_SCHEDULE:
        return { ...state, schedule : payload };
    case directorConstants.GET_DOCTOR:
        return { ...state, doctor : payload };
    case directorConstants.GET_CUSTOMER:
        return { ...state, customer : payload };
    case directorConstants.GET_ASSIGNED_TO:
        return { ...state, assignedto : payload };
    case directorConstants.GET_UID_APPROVAL:
        return { ...state, approvaluid : payload };
    case directorConstants.GET_PRODUCTS_ALL:
        return { ...state, productall : payload };
    case directorConstants.GET_PRODUCTS_NEW:
        return { ...state, productnew : payload };
    case directorConstants.GET_DISTRIBUTION_CENTER:
        return { ...state, distributioncenter : payload };
    case directorConstants.GET_DEPARTMENT_HEAD:
        return { ...state, departmenthead : payload };
    case directorConstants.GET_ASSIGNED_TO_RSM:
        return { ...state, assignedtorsm : payload };
    case directorConstants.GET_ASSIGNED_TO_AM:
        return { ...state, assignedtoam : payload };
    case directorConstants.GET_ASSIGNED_TO_MPO:
        return { ...state, assignedtompo : payload };
    default:
      return state;
  }
};
