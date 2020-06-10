import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

const Settings = (props) => {
  // Получаем данные выбранного виджета
  const selectedWidget = useSelector((state) => state.sections.selectedWidget);

  // Получаем массив секций
  const sections = useSelector((state) => state.sections.sections);

  // Если виджет не выбран то показываем сообщение
  if (!selectedWidget) return <p>Выберите виджет для настройки</p>;

  // Получаем настройки виджета
  const { sectionIndex, columnIndex, rowIndex } = selectedWidget;
  const settings = sections[sectionIndex].columns[columnIndex][rowIndex];

  // Загрузаем страницу настроек виджета
  const WidgetSettings = loadable(() =>
    import(`../widgets/${settings.widgetName}/settings`)
  );

  return (
    WidgetSettings && <WidgetSettings {...selectedWidget} {...settings.props} />
  );
};

export default Settings;
