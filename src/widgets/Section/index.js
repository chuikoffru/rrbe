import React from "react";
import loadable from "@loadable/component";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { selectWidget } from "../../redux/sections/actions";

import "./section.scss";

const Section = (props) => {
  const dispatch = useDispatch();

  const setSelectedWidget = (event, columnIndex, rowIndex) => {
    console.log("event", event);
    dispatch(selectWidget(props.sectionIndex, columnIndex, rowIndex));
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
      {props.section.columns.map((rows, columnIndex) => (
        <Col key={columnIndex} className="colDrop">
          {rows.map((row, rowIndex) => {
            const Widget = loadable(() => import(`../${row.widgetName}`));
            return (
              <Widget
                key={rowIndex}
                {...row.props}
                onClick={(event) =>
                  setSelectedWidget(event, columnIndex, rowIndex)
                }
              />
            );
          })}
        </Col>
      ))}
    </Row>
  );
};

export default Section;
