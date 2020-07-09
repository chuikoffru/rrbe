import React from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useDispatch, useSelector } from "react-redux";
import { ItemTypes } from "../helpers/itemTypes";
import {
  copyWidgetStyles,
  pasteWidgetStyles,
  removeWidget,
  selectWidget,
  copyWidget,
  selectSection,
  removeSection,
} from "../store/sections/actions";
import {
  MENU_COPY_WIDGET,
  MENU_CUT_WIDGET,
  MENU_PASTE_WIDGET_BEFORE,
  MENU_PASTE_WIDGET_AFTER,
  MENU_DELETE_WIDGET,
  MENU_COPY_STYLES,
  MENU_PASTE_STYLES,
  MENU_DELETE_SECTION,
} from "../store/types";

const WidgetContextMenu = () => {
  const dispatch = useDispatch();
  const tmpWidgetStyles = useSelector((state) => state.sections.present.tmpWidgetStyles);

  const onClick = ({ props }) => {
    var _props$widget, _props$widget$params;

    switch (props.action) {
      case MENU_COPY_STYLES:
        return dispatch(
          copyWidgetStyles(
            (_props$widget = props.widget) === null || _props$widget === void 0
              ? void 0
              : (_props$widget$params = _props$widget.params) === null ||
                _props$widget$params === void 0
              ? void 0
              : _props$widget$params.styles
          )
        );

      case MENU_PASTE_STYLES:
        return dispatch(pasteWidgetStyles());

      case MENU_DELETE_WIDGET:
        dispatch(removeWidget());
        return dispatch(selectWidget(null, null, null, null));

      case MENU_COPY_WIDGET:
        return dispatch(copyWidget(props.widget));

      case MENU_CUT_WIDGET:
        dispatch(copyWidget(props.widget));
        dispatch(removeWidget());
        return dispatch(selectWidget(null, null, null, null));

      case MENU_DELETE_SECTION:
        // Удаляем текущую выбранную секцию
        dispatch(removeSection()); // Сбрасываем значение выбранного виджета

        dispatch(selectWidget(null, null, null, null)); // Сбрасываем значение выбранной секции

        return dispatch(selectSection(null));

      default:
        break;
    }
  };

  return /*#__PURE__*/ React.createElement(
    Menu,
    {
      id: ItemTypes.WIDGET,
    },
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_COPY_WIDGET,
        },
        onClick: onClick,
      },
      "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442"
    ),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_CUT_WIDGET,
        },
        onClick: onClick,
      },
      "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442"
    ),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_PASTE_WIDGET_BEFORE,
        },
        disabled: true,
        onClick: onClick,
      },
      "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u043E"
    ),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_PASTE_WIDGET_AFTER,
        },
        disabled: true,
        onClick: onClick,
      },
      "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435"
    ),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_DELETE_WIDGET,
        },
        onClick: onClick,
      },
      "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442"
    ),
    /*#__PURE__*/ React.createElement(Separator, null),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_COPY_STYLES,
        },
        onClick: onClick,
      },
      "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438"
    ),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_PASTE_STYLES,
        },
        disabled: Object.keys(tmpWidgetStyles).length === 0,
        onClick: onClick,
      },
      "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0438\u043B\u0438"
    ),
    /*#__PURE__*/ React.createElement(Separator, null),
    /*#__PURE__*/ React.createElement(
      Item,
      {
        data: {
          action: MENU_DELETE_SECTION,
        },
        onClick: onClick,
      },
      "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0435\u043A\u0446\u0438\u044E"
    )
  );
};

export default WidgetContextMenu;
