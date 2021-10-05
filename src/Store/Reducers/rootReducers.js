import { combineReducers } from "redux";
import { loginReducer} from './loginReducer'
import {deportReducer} from './deportmanagerReducer'
import { directorReducer } from "./directorReducer";
// import { loginReducer} from './loginReducer'

const reducers = combineReducers({
    logIn  : loginReducer,
    deport: deportReducer,
    director: directorReducer,
  });
  export default reducers;