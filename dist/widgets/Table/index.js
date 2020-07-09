import React, { useLayoutEffect, useState } from "react";
import { Table as T } from "react-bootstrap";
import { sourceTypes } from "./sourceTypes";
import getDataFromApi from "./helpers/getDataFromApi";

const Table = ({
  dataFrom,
  api,
  variable,
  columns,
  rows,
  striped,
  variant,
  bordered,
  size,
  hover,
  borderless
}) => {
  const [header, setHeader] = useState(columns || []);
  const [data, setData] = useState(rows || []);
  useLayoutEffect(() => {
    if (dataFrom === sourceTypes.API && api) {
      (async () => {
        const data = await getDataFromApi(api);

        if (data) {
          setHeader(Object.keys(data[0]));
          setData(data);
        }
      })();
    }
  }, [api, dataFrom]);

  const renderData = () => {
    switch (dataFrom) {
      case sourceTypes.RENDER:
        return /*#__PURE__*/React.createElement(React.Fragment, null, "@foreach($", variable, " as $item)", data.map((row, keyRow) => /*#__PURE__*/React.createElement("tr", {
          key: keyRow
        }, Object.entries(row).map(([key, value]) => /*#__PURE__*/React.createElement("td", {
          key: key,
          dangerouslySetInnerHTML: {
            __html: `{{ $item->${value} }}`
          }
        })))), "@endforeach");

      default:
        return data.map((row, keyRow) => /*#__PURE__*/React.createElement("tr", {
          key: keyRow
        }, Object.entries(row).map(([key, value]) => /*#__PURE__*/React.createElement("td", {
          key: key
        }, String(value)))));
    }
  };

  return /*#__PURE__*/React.createElement(T, {
    size: size,
    variant: variant,
    striped: striped,
    bordered: bordered,
    hover: hover,
    borderless: borderless
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, header.map((item, index) => /*#__PURE__*/React.createElement("th", {
    key: index
  }, item)))), /*#__PURE__*/React.createElement("tbody", null, renderData()));
};

export default Table;