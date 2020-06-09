import React from "react";
import { Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import "./Section.scss";
import { useDispatch } from "react-redux";
import { selectWidget } from "../redux/actions";

const Section = (props) => {
  const dispatch = useDispatch();

  const selectWidget = (event, sectionIndex, rowIndex) => {
    event.stopPropagation();
    dispatch(selectWidget(sectionIndex, rowIndex));
    console.log("sectionIndex, rowIndex", sectionIndex, rowIndex);
  };

  const selectSection = (sectionIndex) => {
    console.log("section id", sectionIndex);
  };

  return (
    <Row
      id={props.section.id}
      style={props.section.settings.styles}
      onClick={(event) => selectSection(props.sectionIndex)}
    >
      {props.section.columns.map((rows, sectionIndex) => (
        <Col key={sectionIndex} className="colDrop">
          {rows.map((row, rowIndex) => {
            const Widget = loadable(() => import(`./${row.widgetName}`));
            return (
              <Widget
                key={rowIndex}
                {...row.props}
                onClick={(event) => selectWidget(event, sectionIndex, rowIndex)}
              />
            );
          })}
        </Col>
      ))}
    </Row>
  );
};

export default Section;
