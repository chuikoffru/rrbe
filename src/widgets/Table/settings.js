import React from "react";

import SelectControl from "components/painter/controls/SelectControl";
import ToggleControl from "components/painter/controls/ToggleControl";

import ApiTableSettings from "./api";
import CustomTableSettings from "./custom";
import RenderTableSettings from "./render";

import useWidgetSettings from "hooks/useWidgetSettings";

import { sourceTypes, sourceTypesList } from "./sourceTypes";

import "./table.scss";

const TableSettings = () => {
  const [dataFrom, setDataFrom] = useWidgetSettings("dataFrom", sourceTypes.API);

  const [striped, setStriped] = useWidgetSettings("striped", false);
  const [bordered, setBordered] = useWidgetSettings("bordered", false);
  const [borderless, setBorderless] = useWidgetSettings("borderless", false);
  const [hover, setHover] = useWidgetSettings("hover", false);
  const [variant, setVariant] = useWidgetSettings("variant", "");
  const [size, setSize] = useWidgetSettings("size", "");

  const showSettings = () => {
    switch (dataFrom) {
      case sourceTypes.API:
        return <ApiTableSettings />;
      case sourceTypes.CUSTOM:
        return <CustomTableSettings />;
      case sourceTypes.RENDER:
        return <RenderTableSettings />;
      default:
        break;
    }
  };

  return (
    <>
      <SelectControl
        name="Источник данных"
        value={dataFrom}
        onChange={setDataFrom}
        list={sourceTypesList}
      />
      {showSettings()}
      <SelectControl
        name="Тема таблицы"
        value={variant}
        onChange={setVariant}
        list={[
          { name: "Светлая", value: "" },
          { name: "Темная", value: "dark" },
        ]}
      />
      <SelectControl
        name="Размер таблицы"
        value={size}
        onChange={setSize}
        list={[
          { name: "Обычный", value: "" },
          { name: "Уменьшенный", value: "sm" },
        ]}
      />
      <ToggleControl name="Выделить все нечетные строки" value={striped} onChange={setStriped} />
      <ToggleControl name="Выделять строку при наведении" value={hover} onChange={setHover} />
      <ToggleControl name="Добавить вертикальные границы" value={bordered} onChange={setBordered} />
      <ToggleControl name="Убрать все границы" value={borderless} onChange={setBorderless} />
    </>
  );
};

export default TableSettings;
