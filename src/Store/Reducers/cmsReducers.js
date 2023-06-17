import { cmsConstants } from "../Constants/cmsConstant";

import { logInConstants } from "../Constants/loginConstant";

const initialState = {
  components: [],
  language: '',
  languages:[]
};
export const cmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cmsConstants.READ_COMPONENT:
      return { ...state, components: payload }
    case cmsConstants.LANGUAGE_SELECTED:
      return { ...state, language: payload }
    case cmsConstants.READ_LANG:
      return { ...state, languages: payload }
    case logInConstants.LOG_OUT_USER:
      return initialState;

    default:
      return state;
  }
};
