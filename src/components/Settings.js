import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Settings = (props) => {
  const selectedWidget = useSelector((state) => state.settings.selectedWidget);

  const sections = useSelector((state) => state.sections.sections);

  if (!selectedWidget) return <p>Выберите виджет для настройки</p>;
  const { sectionIndex, columnIndex, rowIndex } = selectedWidget;
  const settings = sections[sectionIndex].columns[columnIndex][rowIndex];

  return <Row>{JSON.stringify(settings)}</Row>;
};

export default Settings;
