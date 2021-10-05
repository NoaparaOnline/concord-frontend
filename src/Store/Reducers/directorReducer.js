import { directorConstants } from "../Constants/directorConstant";
const initialState = {
    schedule : [],
};
export const directorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case directorConstants.GET_SCHEDULE:
        return { ...state, schedule : payload };
    default:
      return state;
  }
};
