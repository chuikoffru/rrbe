import React from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useDispatch, useSelector } from "react-redux";

import { ItemTypes } from "helpers/itemTypes";

import {
  MENU_COPY_WIDGET,
  MENU_PASTE_WIDGET,
  MENU_DELETE_WIDGET,
  MENU_COPY_STYLES,
  MENU_PASTE_STYLES,
} from "redux/types";

import { copyWidgetStyles, pasteWidgetStyles, removeWidget } from "redux/sections/actions";

const WidgetContextMenu = () => {
  const dispatch = useDispatch();
  const tmpWidgetStyles = useSelector((state) => state.sections.present.tmpWidgetStyles);
  console.log("tmpWidgetStyles", tmpWidgetStyles);

  const onClick = ({ event, props }) => {
    console.log(event.target, props);
    const { sectionIndex, columnIndex, rowIndex } = props;
    switch (props.action) {
      case MENU_COPY_STYLES:
        return dispatch(copyWidgetStyles(props.widget?.params?.styles));
      case MENU_PASTE_STYLES:
        console.log("Вставить стили");
        return dispatch(pasteWidgetStyles(sectionIndex, columnIndex, rowIndex));
      case MENU_DELETE_WIDGET:
        console.log("Удалить виджет");
        return dispatch(removeWidget());
      default:
        break;
    }
  };

  return (
    <Menu id={ItemTypes.WIDGET}>
      <Item data={{ action: MENU_COPY_WIDGET }} onClick={onClick}>
        Копировать виджет
      </Item>
      <Item data={{ action: MENU_PASTE_WIDGET }} disabled onClick={onClick}>
        Вставить виджет
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
