import { combineReducers } from "redux";
import undoable from "redux-undo";
import { appReducer } from "./app/reducer";
import { sectionsReducer } from "./sections/reducer";

export const rootReducer = combineReducers({
  sections: undoable(sectionsReducer, {
    limit: 10,
  }),
  app: appReducer,
});
