import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

const Settings = (props) => {
  const selectedWidget = useSelector((state) => state.settings.selectedWidget);

  const sections = useSelector((state) => state.sections.sections);

  if (!selectedWidget) return <p>Выберите виджет для настройки</p>;
  const { sectionIndex, columnIndex, rowIndex } = selectedWidget;
  const settings = sections[sectionIndex].columns[columnIndex][rowIndex];

  const WidgetSettings = loadable(() =>
    import(`../widgets/${settings.widgetName}/settings`)
  );
  return <WidgetSettings {...selectedWidget} {...settings.props} />;
};

export default Settings;
