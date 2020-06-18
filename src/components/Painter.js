import React from "react";
import { Card, Accordion } from "react-bootstrap";
import Appearance from "./Painter/Appearance";
import Indentation from "./Painter/Indentation";
import Alignments from "./Painter/Alignments";

const Painter = ({ type }) => {
  const categories = [
    { name: "Оформление", icon: null, cmp: <Appearance /> },
    { name: "Позиционирование", icon: null, cmp: <Alignments /> },
    { name: "Отступы", icon: null, cmp: <Indentation /> },
  ];

  return (
    <Accordion defaultActiveKey={0}>
      {categories.map((category, index) => (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            {category.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>{category.cmp}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Painter;
