import { combineReducers } from "redux";
import { sectionsReducer } from "./sectionsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  sections: sectionsReducer,
  app: appReducer,
});
