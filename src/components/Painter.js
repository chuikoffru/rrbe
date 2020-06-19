import React from "react";
import { Card, Accordion } from "react-bootstrap";
import loadable from "@loadable/component";

const Painter = ({ type }) => {
  console.log("Painters init");
  const categories = [
    {
      name: "Оформление",
      icon: null,
      cmp: loadable(() => import(`components/painter/${type}/Appearance`)),
    },
    {
      name: "Позиционирование",
      icon: null,
      cmp: loadable(() => import(`components/painter/${type}/Alignments`)),
    },
    {
      name: "Отступы",
      icon: null,
      cmp: loadable(() => import(`components/painter/${type}/Indentation`)),
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
            <Card.Body>{category.cmp.render()}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Painter;
