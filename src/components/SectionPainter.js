import React, { memo } from "react";
import { Card, Accordion } from "react-bootstrap";

import Appearance from "./Painter/Appearance";
import Indentation from "./Painter/Indentation";
import Alignments from "./Painter/Alignments";

import useSectionSettings from "hooks/useSectionSettings";

const SectionPainter = () => {
  console.log("Section Painters init");

  const section = useSectionSettings();

  const categories = [
    {
      name: "Оформление",
      icon: null,
      cmp: memo(<Appearance {...section} />),
    },
    {
      name: "Позиционирование",
      icon: null,
      cmp: memo(<Alignments {...section} />),
    },
    {
      name: "Отступы",
      icon: null,
      cmp: memo(<Indentation {...section} />),
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

export default SectionPainter;
