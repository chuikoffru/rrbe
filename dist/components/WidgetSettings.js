import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import loadWidget from "../helpers/loadWidget";
import WidgetPainter from "./painter/WidgetPainter";

const WidgetSettings = () => {
  const {
    widgetName
  } = useSelector(state => state.sections.present.selectedWidget); // Загрузаем страницу настроек виджета

  const WidgetSettings = loadable(() => widgetName ? loadWidget(widgetName, true) : new Promise(() => null));
  return widgetName ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WidgetSettings, null), /*#__PURE__*/React.createElement(WidgetPainter, null)) : /*#__PURE__*/React.createElement("p", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0436\u0435\u0442");
};

export default WidgetSettings;