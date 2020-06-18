import React from "react";
import useWidgetSettings from "hooks/useWidgetSettings";
import useSectionSettings from "hooks/useSectionSettings";

const Appearance = (props) => {
  const widget = useWidgetSettings();
  const section = useSectionSettings();
  console.log("widget, section", widget, section);
  return <div>Оформление</div>;
};

export default Appearance;
