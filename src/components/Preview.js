import React, { useRef } from "react";
import { useSelector } from "react-redux";

import useGlobalSettings from "hooks/useGlobalSettings";

import WidgetContextMenu from "./WidgetContextMenu";
import ColumnContextMenu from "./ColumnContextMenu";
import Sections from "./Sections";
import Top from "./top/Top";

import "react-contexify/dist/ReactContexify.min.css";
import DropSectionContainer from "./DropSectionContainer";
import { ItemTypes } from "helpers/itemTypes";

const Preview = () => {
  const sections = useSelector((state) => state.sections.present.sections);
  const [globalSettings] = useGlobalSettings();
  const ref = useRef(null);

  return (
    <div className="rrbe__right-container">
      <Top html={ref.current?.innerHTML} sections={sections} />
      <div className="rrbe__preview" style={globalSettings} ref={ref}>
        {sections.map((section, sectionIndex) => (
          <Sections key={section.id} section={section} sectionIndex={sectionIndex} />
        ))}
      </div>
      <WidgetContextMenu />
      <ColumnContextMenu />
      <DropSectionContainer accept={[ItemTypes.SECTIONS, ItemTypes.COMPONENTS]} />
    </div>
  );
};

export default Preview;
