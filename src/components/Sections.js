import React, { useCallback } from "react";
import { Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/sections/actions";
import { generateId } from "../helpers/string";

import Column from "./Column";

import { ItemTypes } from "../helpers/itemTypes";

const Sections = ({ section, sectionIndex }) => {
  console.log("Sections init");
  const dispatch = useDispatch();

  const addNewWidget = useCallback(
    (item, columnIndex) => {
      delete item.icon;
      dispatch(
        addWidget(sectionIndex, columnIndex, { ...item, id: generateId() })
      );
    },
    [dispatch, sectionIndex]
  );

  return (
    <div id={section.id} style={section.params && section.params.styles}>
      <Container>
        <Row>
          {section.columns.map((rows, columnIndex) => {
            return (
              <Column
                key={columnIndex}
                rows={rows}
                sectionIndex={sectionIndex}
                columnIndex={columnIndex}
                accept={[ItemTypes.ELEMENTS]}
                onDrop={(item) => addNewWidget(item, columnIndex)}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Sections;
