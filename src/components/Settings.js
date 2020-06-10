import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

const Settings = (props) => {
  // Получаем данные выбранного виджета
  const selectedWidget = useSelector(
    (state) => state.sections.selectedWidget.widgetName
  );

  // Если виджет не выбран то показываем сообщение
  if (!selectedWidget) return <p>Выберите виджет для настройки</p>;

  // Загрузаем страницу настроек виджета
  const WidgetSettings = loadable(() =>
    import(`../widgets/${selectedWidget}/settings`)
  );

  return WidgetSettings && <WidgetSettings />;
};

export default Settings;
