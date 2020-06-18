import {
  ADD_WIDGET,
  CHANGE_WIDGET,
  SELECT_WIDGET,
  ADD_SECTION,
  SELECT_SECTION,
} from "../types";

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

export function selectSection(sectionIndex) {
  return {
    type: SELECT_SECTION,
    payload: sectionIndex,
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

export function addSection(section) {
  return {
    type: ADD_SECTION,
    payload: {
      ...section,
    },
  };
}
