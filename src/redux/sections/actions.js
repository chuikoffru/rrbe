import {
  ADD_WIDGET,
  CHANGE_WIDGET,
  SELECT_WIDGET,
  ADD_SECTION,
  SELECT_SECTION,
  CHANGE_SECTION,
  ADD_COLUMNS,
  REMOVE_COLUMNS,
  REMOVE_WIDGET,
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

export function changeSection(settings) {
  return {
    type: CHANGE_SECTION,
    payload: {
      settings,
    },
  };
}

export function addColumns(len) {
  return {
    type: ADD_COLUMNS,
    payload: len,
  };
}

export function removeColumns(len) {
  return {
    type: REMOVE_COLUMNS,
    payload: len,
  };
}

export function removeWidget() {
  return {
    type: REMOVE_WIDGET,
  };
}
