import { combineReducers } from "redux";
import { loginReducer} from './loginReducer'

const reducers = combineReducers({
    logIn  : loginReducer,
  });
  export default reducers;