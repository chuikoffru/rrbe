import React, { useCallback } from "react";

import { Row } from "react-bootstrap";

import Column from "./Column";

import { ItemTypes } from "../helpers/itemTypes";

const Sections = ({ section, sectionIndex }) => {
  const handleDrop = useCallback((item, columnIndex, sectionIndex) => {
    console.log(
      "item, columnIndex, sectionIndex",
      item,
      columnIndex,
      sectionIndex
    );
  }, []);

  return (
    <Row id={section.id} style={section.settings.styles}>
      {section.columns.map((rows, columnIndex) => (
        <Column
          key={columnIndex}
          rows={rows}
          sectionIndex={sectionIndex}
          columnIndex={columnIndex}
          accept={[ItemTypes.ELEMENTS]}
          onDrop={(item) => handleDrop(item, columnIndex, sectionIndex)}
        />
      ))}
    </Row>
  );
};

export default Sections;
