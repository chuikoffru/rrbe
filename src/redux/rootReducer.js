import { combineReducers } from "redux";
import { sectionsReducer } from "./sectionsReducer";
import { appReducer } from "./appReducer";
import { settingsReducer } from "./settingsReducer";

export const rootReducer = combineReducers({
  sections: sectionsReducer,
  app: appReducer,
  settings: settingsReducer,
});
