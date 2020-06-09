import { SELECT_WIDGET, SELECT_SECTION } from "../types";

const initialState = {
  selectedWidget: null,
  selectedSection: null,
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WIDGET:
      return { ...state, selectedWidget: action.payload };
    case SELECT_SECTION:
      return { ...state, selectedSection: action.payload };
    default:
      return state;
  }
};
