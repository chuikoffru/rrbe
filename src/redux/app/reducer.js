import { LOADER, SHOW_ALERT, HIDE_ALERT } from "../types";

const initialState = {
  loading: false,
  alert: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return { ...state, loading: !state.loading };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
