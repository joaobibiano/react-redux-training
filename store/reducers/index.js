import { combineReducers } from "redux";

import checkoutReducer from "./checkout";
import userReducer from "./user";

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  user: userReducer,
});

export default rootReducer;
