import React from "react";

import useWidgetSettings from "hooks/useWidgetSettings";
import SelectControl from "components/painter/controls/SelectControl";
import ApiTableSettings from "./api";
import CustomTableSettings from "./custom";

import { sourceTypes } from "./sourceTypes";

import "./table.scss";

const TableSettings = () => {
  const [dataFrom, setDataFrom] = useWidgetSettings(
    "dataFrom",
    sourceTypes.API.value
  );

  /* const [striped, setStriped] = useWidgetSettings("striped", false);
  const [bordered, setBordered] = useWidgetSettings("bordered", false);
  const [hover, setHover] = useWidgetSettings("hover", false);
  const [variant, setVariant] = useWidgetSettings("variant", ""); */

  return (
    <>
      <SelectControl
        name="Источник данных"
        value={dataFrom}
        onChange={setDataFrom}
        list={sourceTypes}
      />
      {dataFrom === sourceTypes.API.value ? (
        <ApiTableSettings />
      ) : (
        <CustomTableSettings />
      )}
    </>
  );
};

export default TableSettings;
