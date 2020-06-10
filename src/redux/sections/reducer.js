import update from "dot-prop-immutable";

import {
  ADD_SECTION,
  ADD_WIDGET,
  CHANGE_WIDGET,
  SELECT_WIDGET,
  SELECT_SECTION,
} from "../types";

const initialState = {
  selectedWidget: null,
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
            widgetName: "Text",
            props: {
              text: "Привет",
            },
          },
          {
            widgetName: "Text",
            props: {
              text: "Привет еще раз",
            },
          },
          {
            widgetName: "Button",
            props: {
              text: "Нажми меня",
            },
          },
        ],
        [
          {
            widgetName: "Text",
            props: {
              text: "Текст сверху картинки",
            },
          },
          {
            widgetName: "Image",
            props: {
              src: "./favicon.ico",
            },
          },
        ],
      ],
    },
  ],
};

export const sectionsReducer = (state = initialState, action) => {
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
      const { sectionIndex, columnIndex, rowIndex } = state.selectedWidget;
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
