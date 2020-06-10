import { ADD_WIDGET, CHANGE_WIDGET, SELECT_WIDGET } from "../types";

export function selectWidget(sectionIndex, columnIndex, rowIndex, widgetName) {
  return {
    type: SELECT_WIDGET,
    payload: {
      widgetName,
      sectionIndex,
      columnIndex,
      rowIndex,
    },
  };
}

export function addWidget(sectionIndex, columnIndex, data) {
  return {
    type: ADD_WIDGET,
    payload: {
      sectionIndex,
      columnIndex,
      data,
    },
  };
}

export function changeWidget(settings) {
  return {
    type: CHANGE_WIDGET,
    payload: {
      settings,
    },
  };
}
