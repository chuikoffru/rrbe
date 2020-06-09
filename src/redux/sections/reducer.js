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
    case ADD_WIDGET:
      console.log("addWidget", action);
      return update.set(
        state,
        `sections.${action.payload.sectionIndex}.columns.${action.payload.columnIndex}`,
        (column) => [...column, action.payload.data]
      );
    case CHANGE_WIDGET:
      console.log("changeWidget", action);
      const { sectionIndex, columnIndex, rowIndex } = action.payload;
      console.log(
        "update.set()",
        update.set(
          state,
          `sections.${sectionIndex}.columns.${columnIndex}.${rowIndex}.props`,
          (props) => action.payload
        )
      );
      /* return update.set(
        state,
        `sections.${action.payload.sectionIndex}.columns.${action.payload.columnIndex}.props`,
        (props) => {...props, action.payload.data}
      ); */
      return state;
    case SELECT_WIDGET:
      return { ...state, selectedWidget: action.payload };
    case SELECT_SECTION:
      return { ...state, selectedSection: action.payload };
    default:
      return state;
  }
};
