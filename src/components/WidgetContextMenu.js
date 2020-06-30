import React from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useDispatch, useSelector } from "react-redux";

import { ItemTypes } from "helpers/itemTypes";
import {
  copyWidgetStyles,
  pasteWidgetStyles,
  removeWidget,
  selectWidget,
  copyWidget,
} from "redux/sections/actions";

import {
  MENU_COPY_WIDGET,
  MENU_CUT_WIDGET,
  MENU_PASTE_WIDGET_BEFORE,
  MENU_PASTE_WIDGET_AFTER,
  MENU_DELETE_WIDGET,
  MENU_COPY_STYLES,
  MENU_PASTE_STYLES,
} from "redux/types";

const WidgetContextMenu = () => {
  const dispatch = useDispatch();
  const tmpWidgetStyles = useSelector((state) => state.sections.present.tmpWidgetStyles);

  const onClick = ({ props }) => {
    console.log(props);
    switch (props.action) {
      case MENU_COPY_STYLES:
        return dispatch(copyWidgetStyles(props.widget?.params?.styles));
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
      default:
        break;
    }
  };

  return (
    <Menu id={ItemTypes.WIDGET}>
      <Item data={{ action: MENU_COPY_WIDGET }} onClick={onClick}>
        Копировать виджет
      </Item>
      <Item data={{ action: MENU_CUT_WIDGET }} onClick={onClick}>
        Вырезать виджет
      </Item>
      <Item data={{ action: MENU_PASTE_WIDGET_BEFORE }} disabled onClick={onClick}>
        Вставить до
      </Item>
      <Item data={{ action: MENU_PASTE_WIDGET_AFTER }} disabled onClick={onClick}>
        Вставить после
      </Item>
      <Item data={{ action: MENU_DELETE_WIDGET }} onClick={onClick}>
        Удалить виджет
      </Item>
      <Separator />
      <Item data={{ action: MENU_COPY_STYLES }} onClick={onClick}>
        Копировать стили
      </Item>
      <Item
        data={{ action: MENU_PASTE_STYLES }}
        disabled={Object.keys(tmpWidgetStyles).length === 0}
        onClick={onClick}
      >
        Вставить стили
      </Item>
    </Menu>
  );
};

export default WidgetContextMenu;
