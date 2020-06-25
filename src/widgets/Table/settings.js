import React from "react";

import SelectControl from "components/painter/controls/SelectControl";
import ApiTableSettings from "./api";
import CustomTableSettings from "./custom";
import RenderTableSettings from "./render";

import useWidgetSettings from "hooks/useWidgetSettings";

import { sourceTypes, sourceTypesList } from "./sourceTypes";

import "./table.scss";

const TableSettings = () => {
  const [dataFrom, setDataFrom] = useWidgetSettings(
    "dataFrom",
    sourceTypes.API
  );

  /* const [striped, setStriped] = useWidgetSettings("striped", false);
  const [bordered, setBordered] = useWidgetSettings("bordered", false);
  const [hover, setHover] = useWidgetSettings("hover", false);
  const [variant, setVariant] = useWidgetSettings("variant", ""); */

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
    </>
  );
};

export default TableSettings;
