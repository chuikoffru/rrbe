import { LOADER, SHOW_ALERT, HIDE_ALERT, SHOW_WIDGETS, HIDE_WIDGETS, SWITCH_SETTINGS_TAB } from "../types";
import { ItemTypes } from "../../helpers/itemTypes";
const initialState = {
  showWidgets: false,
  loading: false,
  alert: null,
  settingsTab: ItemTypes.GLOBAL
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return { ...state,
        loading: !state.loading
      };

    case SHOW_ALERT:
      return { ...state,
        alert: action.payload
      };

    case HIDE_ALERT:
      return { ...state,
        alert: null
      };

    case SHOW_WIDGETS:
      return { ...state,
        showWidgets: true
      };

    case HIDE_WIDGETS:
      return { ...state,
        showWidgets: false
      };

    case SWITCH_SETTINGS_TAB:
      return { ...state,
        settingsTab: action.payload
      };

    default:
      return state;
  }
};