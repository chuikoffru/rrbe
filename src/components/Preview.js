import React from "react";
import { useSelector } from "react-redux";
import Section from "../widgets/Section";

const Preview = () => {
  const sections = useSelector((state) => state.sections.sections);
  return sections.map((section, sectionIndex) => (
    <Section key={section.id} section={section} sectionIndex={sectionIndex} />
  ));
};

export default Preview;
