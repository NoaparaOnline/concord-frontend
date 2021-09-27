import { combineReducers } from "redux";
import { loginReducer} from './loginReducer'
import {deportReducer} from './deportmanagerReducer'
// import { loginReducer} from './loginReducer'

const reducers = combineReducers({
    logIn  : loginReducer,
    deport: deportReducer,
  });
  export default reducers;