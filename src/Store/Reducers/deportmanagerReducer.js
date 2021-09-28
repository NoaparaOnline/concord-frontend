import { deportConstants } from "../Constants/deportmanagerConstant";
const initialState = {
    oldorder : [],
    neworder : [],
    order : [],
    stock : [],
    productidstate : {},
};
export const deportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case deportConstants.GET_OLD_ORDER:
        return { ...state, oldorder : payload };


    case deportConstants.GET_ORDER:
        return { ...state, order : payload };
    
    case deportConstants.GET_NEW_ORDER:
        return { ...state, neworder : payload };
    
    case deportConstants.GET_STOCKS_PRODUCT:
        return { ...state, stock : payload };
    
    case deportConstants.GET_PRODUCT_STATE:
        return { ...state, productidstate : payload };
    
    default:
      return state;
  }
};
