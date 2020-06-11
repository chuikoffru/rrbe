import React from "react";

import { Row } from "react-bootstrap";

import Column from "./Column";

const Sections = (props) => {
  // Выбираем секцию
  const selectSection = (event, sectionIndex) => {
    console.log("section id", sectionIndex);
  };

  return (
    <Row
      id={props.section.id}
      style={props.section.settings.styles}
      onClick={(event) => selectSection(event, props.sectionIndex)}
    >
      {props.section.columns.map((rows, columnIndex) => (
        <Column
          key={columnIndex}
          rows={rows}
          sectionIndex={props.sectionIndex}
          columnIndex={columnIndex}
        />
      ))}
    </Row>
  );
};

export default Sections;
