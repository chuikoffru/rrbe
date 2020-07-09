import React from "react";
import { Menu, Item } from "react-contexify";
import { useDispatch, useSelector } from "react-redux";
import { ItemTypes } from "../helpers/itemTypes";
import { MENU_PASTE_WIDGET } from "../store/types";
import { pasteWidget } from "../store/sections/actions";

const ColumnContextMenu = () => {
  const dispatch = useDispatch();
  const tmpWidget = useSelector(state => state.sections.present.tmpWidget);

  const onClick = ({
    props
  }) => {
    console.log(props);

    switch (props.action) {
      case MENU_PASTE_WIDGET:
        return dispatch(pasteWidget(props.sectionIndex, props.columnIndex));

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement(Menu, {
    id: ItemTypes.SECTIONS
  }, /*#__PURE__*/React.createElement(Item, {
    data: {
      action: MENU_PASTE_WIDGET
    },
    disabled: Object.keys(tmpWidget).length === 0,
    onClick: onClick
  }, "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442"), /*#__PURE__*/React.createElement(Item, {
    data: {
      action: MENU_PASTE_WIDGET
    },
    disabled: true,
    onClick: onClick
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443"));
};

export default ColumnContextMenu;