import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSection } from "../redux/sections/actions";
import { generateId } from "../helpers/string";
import { ItemTypes } from "../helpers/itemTypes";

import DropSectionContainer from "./DropSectionContainer";
import Sections from "./Sections";

const Preview = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections.present.sections);

  const addNewSection = useCallback(
    (item) => {
      delete item.icon;
      item.id = generateId();
      // Устанавливаем дефолтное количество колонок
      item.columns = new Array(item.params.columns).fill([]);
      dispatch(addSection({ ...item }));
    },
    [dispatch]
  );

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <Sections
          key={sectionIndex}
          section={section}
          sectionIndex={sectionIndex}
        />
      ))}
      <DropSectionContainer
        accept={[ItemTypes.COMPONENTS]}
        onDrop={(item) => addNewSection(item)}
      />
    </>
  );
};

export default Preview;
