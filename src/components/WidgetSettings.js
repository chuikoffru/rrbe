import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import loadWidget from "../helpers/loadWidget";
import loadable from "@loadable/component";

const WidgetSettings = () => {
  const { widgetName } = useSelector((state) => state.sections.present.selectedWidget);

  // Загрузаем страницу настроек виджета
  const WidgetSettings = useMemo(
    () => loadable(() => (widgetName ? loadWidget(widgetName, true) : new Promise(() => null))),
    [widgetName]
  );

  return widgetName ? <WidgetSettings /> : <p>Выберите виджет</p>;
};

export default WidgetSettings;
