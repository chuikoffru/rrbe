import { SELECT_WIDGET } from "../types";

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
