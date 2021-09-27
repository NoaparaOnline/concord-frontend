import { deportConstants } from "../Constants/deportmanagerConstant";
const initialState = {
    order : [],
};
export const deportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case deportConstants.GET_ORDER:
        return { ...state, order : payload };
    default:
      return state;
  }
};
