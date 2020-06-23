import React, { useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSection } from "redux/sections/actions";
import { generateId } from "helpers/string";
import { ItemTypes } from "helpers/itemTypes";

import DropSectionContainer from "./DropSectionContainer";
import Sections from "./Sections";
import Top from "./top/Top";

const Preview = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections.present.sections);

  const ref = useRef(null);

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

      dispatch(addSection({ ...item }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (sections.length > 0) {
      console.log("ref.current", ref.current);
    }
  }, [sections]);

  return (
    <>
      <Top html={ref.current?.innerHTML} />
      <div className="rrbe__preview" ref={ref}>
        {sections.map((section, sectionIndex) => (
          <Sections
            key={sectionIndex}
            section={section}
            sectionIndex={sectionIndex}
          />
        ))}
      </div>
      <DropSectionContainer
        accept={[ItemTypes.COMPONENTS, ItemTypes.SECTIONS]}
        onDrop={(item) => addNewSection(item)}
      />
    </>
  );
};

export default Preview;
