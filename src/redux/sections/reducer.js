import update from "dot-prop-immutable";

import {
  ADD_SECTION,
  ADD_WIDGET,
  CHANGE_WIDGET,
  SELECT_WIDGET,
  SELECT_SECTION,
} from "../types";

import { ItemTypes } from "../../helpers/itemTypes";
import { generateId } from "../../helpers/string";

const initialState = {
  selectedWidget: {
    sectionIndex: null,
    columnIndex: null,
    rowIndex: null,
    name: null,
  },
  selectedSection: null,
  sections: [
    {
      id: 1,
      name: "hero",
      settings: {
        columns: 2,
        styles: {
          padding: 10,
          margin: 10,
        },
      },
      columns: [
        [
          {
            id: generateId(),
            name: "Text",
            type: ItemTypes.ELEMENTS,
            params: {
              text: "Привет",
            },
          },
          {
            id: generateId(),
            name: "Text",
            type: ItemTypes.ELEMENTS,
            params: {
              text: "Привет еще раз",
            },
          },
          {
            id: generateId(),
            name: "Button",
            type: ItemTypes.ELEMENTS,
            params: {
              text: "Нажми меня",
            },
          },
        ],
        [
          {
            id: generateId(),
            name: "Text",
            type: ItemTypes.ELEMENTS,
            params: {
              text: "Текст сверху картинки",
            },
          },
          {
            id: generateId(),
            name: "Image",
            type: ItemTypes.ELEMENTS,
            params: {
              src: "./favicon.ico",
            },
          },
        ],
      ],
    },
  ],
};

export const sectionsReducer = (state = initialState, action) => {
  const { sectionIndex, columnIndex, rowIndex } = state.selectedWidget;

  switch (action.type) {
    case ADD_SECTION:
      // Добавляем новую секцию
      return { ...state, sections: [...state.sections, action.payload] };

    case ADD_WIDGET:
      // Добавляем новый виджет
      return update.set(
        state,
        `sections.${action.payload.sectionIndex}.columns.${action.payload.columnIndex}`,
        (column) => [...column, action.payload.data]
      );

    case CHANGE_WIDGET:
      // Изменяем настройки виджета
      console.log("changeWidget", action);
      return update.set(
        state,
        `sections.${sectionIndex}.columns.${columnIndex}.${rowIndex}.props`,
        action.payload.settings
      );

    case SELECT_WIDGET:
      // Сделать виджет активным (выбранным)
      return { ...state, selectedWidget: action.payload };

    case SELECT_SECTION:
      // Сделать секцию активной (выбранной)
      return { ...state, selectedSection: action.payload };

    default:
      return state;
  }
};
