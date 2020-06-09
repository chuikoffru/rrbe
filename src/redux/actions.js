import { ADD_TEXT, SELECT_WIDGET } from "./types";

export function addText(sectionIndex, columnIndex) {
  return {
    type: ADD_TEXT,
    payload: {
      sectionIndex,
      columnIndex,
    },
  };
}

export function selectWidget(sectionIndex, rowIndex) {
  return {
    type: SELECT_WIDGET,
    payload: {
      sectionIndex,
      rowIndex,
    },
  };
}
