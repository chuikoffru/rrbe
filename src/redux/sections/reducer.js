import mutate from "dot-prop-immutable";

import {
  ADD_SECTION,
  ADD_WIDGET,
  CHANGE_WIDGET,
  SELECT_WIDGET,
  SELECT_SECTION,
  CHANGE_SECTION,
  ADD_COLUMNS,
  REMOVE_COLUMNS,
  REMOVE_WIDGET,
  IMPORT_STRUCTURE,
} from "../types";

const initialState = {
  selectedWidget: {
    sectionIndex: null,
    columnIndex: null,
    rowIndex: null,
    name: null,
  },
  selectedSection: null,
  sections: [],
};

export const sectionsReducer = (state = initialState, action) => {
  const { sectionIndex, columnIndex, rowIndex } = state.selectedWidget;

  switch (action.type) {
    case ADD_SECTION:
      // Добавляем новую секцию
      return { ...state, sections: [...state.sections, action.payload] };

    case ADD_WIDGET:
      // Добавляем новый виджет
      return mutate.set(
        state,
        `sections.${action.payload.sectionIndex}.columns.${action.payload.columnIndex}`,
        (column) => [...column, action.payload.data]
      );

    case CHANGE_WIDGET:
      // Изменяем настройки виджета
      return mutate.set(
        state,
        `sections.${sectionIndex}.columns.${columnIndex}.${rowIndex}.params`,
        action.payload.settings
      );

    case SELECT_WIDGET:
      // Сделать виджет активным (выбранным)
      return { ...state, selectedWidget: action.payload };

    case SELECT_SECTION:
      // Сделать секцию активной (выбранной)
      return { ...state, selectedSection: action.payload };

    case CHANGE_SECTION:
      return mutate.set(
        state,
        `sections.${state.selectedSection}.params`,
        action.payload.settings
      );
    case ADD_COLUMNS:
      return mutate.set(
        state,
        `sections.${state.selectedSection}.columns`,
        (columns) => [...columns, ...Array(action.payload).fill([])]
      );
    case REMOVE_COLUMNS:
      return mutate.set(
        state,
        `sections.${state.selectedSection}.columns`,
        (columns) => columns.slice(0, action.payload)
      );
    case REMOVE_WIDGET:
      return mutate.delete(
        state,
        `sections.${sectionIndex}.columns.${columnIndex}.${rowIndex}`
      );
    case IMPORT_STRUCTURE:
      return mutate.set(state, `sections`, action.payload);

    default:
      return state;
  }
};
