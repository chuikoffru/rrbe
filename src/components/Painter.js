import React from "react";
import useWidgetSettings from "../hooks/useWidgetSettings";
import useSectionSettings from "../hooks/useSectionSettings";

const Painter = ({ type }) => {
  const widget = useWidgetSettings();
  const section = useSectionSettings();

  console.log("widget, section, type", widget, section, type);
  return <div></div>;
};

export default Painter;
