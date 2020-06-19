import React from "react";
import { Card, Accordion } from "react-bootstrap";
import Appearance from "./Painter/Appearance";
import Indentation from "./Painter/Indentation";
import Alignments from "./Painter/Alignments";

const Painter = ({ type }) => {
  console.log("Painters init");

  const categories = [
    { name: "Оформление", icon: null, cmp: <Appearance type={type} /> },
    { name: "Позиционирование", icon: null, cmp: <Alignments type={type} /> },
    { name: "Отступы", icon: null, cmp: <Indentation type={type} /> },
  ];

  return (
    <Accordion defaultActiveKey={0}>
      {categories.map((category, index) => (
        <Card key={index}>
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
