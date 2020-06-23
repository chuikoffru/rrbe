import React, { useCallback } from "react";
import { Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addWidget, selectSection } from "redux/sections/actions";
import { generateId } from "helpers/string";

import Column from "./Column";

import { ItemTypes } from "helpers/itemTypes";
import { selectWidget } from "../redux/sections/actions";

const Sections = ({ section, sectionIndex }) => {
  const dispatch = useDispatch();

  const addNewWidget = useCallback(
    (item, columnIndex) => {
      delete item.icon;
      // Добавляем новый виджет
      dispatch(
        addWidget(sectionIndex, columnIndex, { ...item, id: generateId() })
      );
      // Делаем секцию в которую добавили активной
      dispatch(selectSection(sectionIndex));
      // Смотрим сколько виджетов в колонке
      const countWidgets = section.columns[columnIndex].length;
      // Делаем последний добавленный виджет активным
      dispatch(
        selectWidget(sectionIndex, columnIndex, countWidgets, item.name)
      );
    },
    [dispatch, section.columns, sectionIndex]
  );

  const setCurrentSection = useCallback(() => {
    dispatch(selectSection(sectionIndex));
  }, [dispatch, sectionIndex]);

  return (
    <div
      className="rrbe__section"
      id={section.id}
      style={section.params && section.params.styles}
      onClick={setCurrentSection}
    >
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
