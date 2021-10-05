import { directorConstants } from "../Constants/directorConstant";
const initialState = {
    schedule : [],
    doctor: [],
    customer : [] ,
    assignedto: [],
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
    default:
      return state;
  }
};
