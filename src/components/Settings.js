import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

const Settings = (props) => {
  // Получаем данные выбранного виджета
  const { sectionIndex, columnIndex, rowIndex, widgetName } = useSelector(
    (state) => state.sections.selectedWidget
  );

  const sections = useSelector((state) => state.sections.sections);

  // Если виджет не выбран то показываем сообщение
  if (!widgetName) return <p>Выберите виджет для настройки</p>;

  const settings = sections[sectionIndex].columns[columnIndex][rowIndex].props;

  // Загрузаем страницу настроек виджета
  const WidgetSettings = loadable(() =>
    import(`../widgets/${widgetName}/settings`)
  );

  return WidgetSettings && <WidgetSettings {...settings} />;
};

export default Settings;
