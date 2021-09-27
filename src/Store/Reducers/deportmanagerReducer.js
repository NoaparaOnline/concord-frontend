import { deportConstants } from "../Constants/deportmanagerConstant";
const initialState = {
    order : [],
    stock : [],
};
export const deportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case deportConstants.GET_ORDER:
        return { ...state, order : payload };
    case deportConstants.GET_STOCKS_PRODUCT:
        return { ...state, stock : payload };
    default:
      return state;
  }
};
