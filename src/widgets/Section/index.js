import React from "react";
import loadable from "@loadable/component";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { selectWidget } from "../../redux/sections/actions";

import "./section.scss";

const Section = (props) => {
  const dispatch = useDispatch();

  // Выбираем виджета
  const setSelectedWidget = (event, columnIndex, rowIndex) => {
    event.stopPropagation();
    dispatch(selectWidget(props.sectionIndex, columnIndex, rowIndex));
  };

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
        <Col key={columnIndex} className="colDrop">
          {rows.map((row, rowIndex) => {
            const Widget = loadable(() => import(`../${row.widgetName}`));
            return (
              <div
                key={rowIndex}
                onClickCapture={(event) =>
                  setSelectedWidget(event, columnIndex, rowIndex)
                }
              >
                <Widget {...row.props} />
              </div>
            );
          })}
        </Col>
      ))}
    </Row>
  );
};

export default Section;
