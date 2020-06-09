import update from "dot-prop-immutable";

import { ADD_SECTION, ADD_TEXT } from "./types";

const initialState = {
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
      return { ...state, sections: [...state.sections, action.payload] };
    case ADD_TEXT:
      const section = {
        widgetName: "Text",
        props: {
          text: "Динамически добавили текст",
        },
      };
      return update.set(
        state,
        `sections.${action.payload.sectionIndex}.columns.${action.payload.columnIndex}`,
        (column) => [...column, section]
      );
    default:
      return state;
  }
};
