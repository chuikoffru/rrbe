import React from "react";
import { useSelector } from "react-redux";
import Sections from "./Sections";

const Preview = () => {
  const sections = useSelector((state) => state.sections.sections);
  return sections.map((section, sectionIndex) => (
    <Sections key={section.id} section={section} sectionIndex={sectionIndex} />
  ));
};

export default Preview;
