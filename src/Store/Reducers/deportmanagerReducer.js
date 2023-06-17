import {
  deportConstants,
  DISTRIBUTION_CENTER_CONSTANT,
} from "../Constants/deportmanagerConstant";
const initialState = {
  oldorder: [],
  neworder: [],
  order: [],
  stock: [],
  stockmedicine: [],
  stockgift: [],
  productidstate: {},
  productuid: "",
  fielddata: {},
};
export const deportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case deportConstants.GET_OLD_ORDER:
      return { ...state, oldorder: payload };

    case deportConstants.GET_ORDER:
      return { ...state, order: payload };

    case deportConstants.GET_NEW_ORDER:
      return { ...state, neworder: payload };

    case deportConstants.GET_STOCKS_PRODUCT:
      return { ...state, stock: payload };

    case deportConstants.GET_STOCKS_MEDICINE_PRODUCT:
      return { ...state, stockmedicine: payload };

    case deportConstants.GET_STOCKS_GIFT_PRODUCT:
      return { ...state, stockgift: payload };

    case deportConstants.GET_PRODUCT_STATE:
      return { ...state, productidstate: payload };

    case deportConstants.GET_UID:
      return { ...state, productuid: payload };

    case deportConstants.FIELD_DATA:
      return { ...state, fielddata: payload };

    default:
      return state;
  }
};
