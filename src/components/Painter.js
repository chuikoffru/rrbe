import React, { memo } from "react";
import { Card, Accordion } from "react-bootstrap";
import loadable from "@loadable/component";
import Switch from "./painter/Switch";
import { ItemTypes } from "helpers/itemTypes";

const Painter = ({ type }) => {
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
    <div className="my-3">
      {type === ItemTypes.ELEMENTS && <Switch />}
      <Accordion>
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
    </div>
  );
};

export default memo(Painter);
