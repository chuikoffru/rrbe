import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { addSection, selectSection } from "redux/sections/actions";

import { generateId } from "helpers/string";
import { ItemTypes } from "helpers/itemTypes";

const DropSectionContainer = ({ accept }) => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections.present.sections);

  const addNewSection = useCallback(
    (item) => {
      delete item.icon;
      item.id = generateId();
      // Проверяем тип секции
      if (item.type === ItemTypes.COMPONENTS) {
        item.type = ItemTypes.ELEMENTS;
        item.columns = [
          [
            {
              id: generateId(),
              name: item.name,
              type: ItemTypes.ELEMENTS,
              params: { ...item.params },
            },
          ],
        ];
      } else {
        // Устанавливаем дефолтное количество колонок
        item.columns = new Array(item.params.columns).fill([]);
      }
      // Добавляем новую секцию
      dispatch(addSection({ ...item }));
      // Делаем новую секцию активной
      dispatch(selectSection(sections.length));
    },
    [dispatch, sections.length]
  );

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: addNewSection,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={classNames({
        "d-print-none": true,
        dropSection: true,
        canDrop,
        isActive: isOver && canDrop,
      })}
    >
      <div className="text-center">Перетащи сюда секцию или компонент</div>
    </div>
  );
};

export default DropSectionContainer;
