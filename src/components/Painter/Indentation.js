import React from "react";
import useWidgetSettings from "hooks/useWidgetSettings";
import useSectionSettings from "hooks/useSectionSettings";

const Indentation = (props) => {
  const widget = useWidgetSettings();
  const section = useSectionSettings();
  console.log("widget, section", widget, section);
  return <div>Отступы</div>;
};

export default Indentation;
