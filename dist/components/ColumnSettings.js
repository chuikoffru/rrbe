import React from "react";
import RangeControl from "./painter/controls/RangeControl";
import ColumnWidthSettings from "./ColumnWidthSettings";
import useColumnsSettings from "../hooks/useColumnsSettings";

const ColumnSettings = () => {
  const [columns, setColumns] = useColumnsSettings("columns", 1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    name: `Количество колонок - ${columns}`,
    value: columns,
    onChange: setColumns,
    options: {
      min: 1,
      max: 12
    }
  }), /*#__PURE__*/React.createElement(ColumnWidthSettings, {
    columns: columns
  }));
};

export default /*#__PURE__*/React.memo(ColumnSettings);