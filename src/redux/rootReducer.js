import { combineReducers } from "redux";
import { appReducer } from "./app/reducer";
import { sectionsReducer } from "./sections/reducer";
import { settingsReducer } from "./settings/reducer";

export const rootReducer = combineReducers({
  sections: sectionsReducer,
  app: appReducer,
  settings: settingsReducer,
});
