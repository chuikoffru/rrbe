import React, { useCallback } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/sections/actions";
import { generateId } from "../helpers/string";

import Column from "./Column";

import { ItemTypes } from "../helpers/itemTypes";

const Sections = ({ section, sectionIndex }) => {
  const dispatch = useDispatch();
  const handleDrop = useCallback(
    (item, columnIndex) => {
      delete item.icon;
      dispatch(
        addWidget(sectionIndex, columnIndex, { ...item, id: generateId() })
      );
    },
    [dispatch, sectionIndex]
  );

  return (
    <Row id={section.id} style={section.settings.styles}>
      {section.columns.map((rows, columnIndex) => (
        <Column
          key={columnIndex}
          rows={rows}
          sectionIndex={sectionIndex}
          columnIndex={columnIndex}
          accept={[ItemTypes.ELEMENTS]}
          onDrop={(item) => handleDrop(item, columnIndex)}
        />
      ))}
    </Row>
  );
};

export default Sections;
