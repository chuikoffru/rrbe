import { ADD_WIDGET, CHANGE_WIDGET, SELECT_WIDGET } from "../types";

export function selectWidget(sectionIndex, columnIndex, rowIndex) {
  return {
    type: SELECT_WIDGET,
    payload: {
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

export function changeWidget({ sectionIndex, columnIndex, rowIndex, data }) {
  console.log(sectionIndex, columnIndex, rowIndex, data);
  return {
    type: CHANGE_WIDGET,
    payload: {
      sectionIndex,
      columnIndex,
      rowIndex,
      data,
    },
  };
}
