import React from "react";
import { Card, Accordion } from "react-bootstrap";

import Appearance from "./Painter/Appearance";
import Indentation from "./Painter/Indentation";
import Alignments from "./Painter/Alignments";

import useWidgetSettings from "../hooks/useWidgetSettings";

const WidgetPainter = () => {
  console.log("Widget Painters init");

  const widget = useWidgetSettings();

  const categories = [
    {
      name: "Оформление",
      icon: null,
      cmp: <Appearance {...widget} />,
    },
    {
      name: "Позиционирование",
      icon: null,
      cmp: <Alignments {...widget} />,
    },
    {
      name: "Отступы",
      icon: null,
      cmp: <Indentation {...widget} />,
    },
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

export default WidgetPainter;
