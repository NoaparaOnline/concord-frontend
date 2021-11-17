import { combineReducers } from "redux";
import { loginReducer} from './loginReducer'
import {deportReducer} from './deportmanagerReducer'
import { directorReducer } from "./directorReducer";
import { staticReducer } from "./staticReducers";
// import { loginReducer} from './loginReducer'

const reducers = combineReducers({
    logIn  : loginReducer,
    deport: deportReducer,
    director: directorReducer,
    static: staticReducer,
  });
  export default reducers;