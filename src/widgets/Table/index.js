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
  borderless,
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
        return (
          <>
            @foreach(${variable} as $item)
            {data.map((row, keyRow) => (
              <tr key={keyRow}>
                {Object.entries(row).map(([key, value]) => (
                  <td
                    key={key}
                    dangerouslySetInnerHTML={{
                      __html: `{{ $item->${value} }}`,
                    }}
                  ></td>
                ))}
              </tr>
            ))}
            @endforeach
          </>
        );

      default:
        return data.map((row, keyRow) => (
          <tr key={keyRow}>
            {Object.entries(row).map(([key, value]) => (
              <td key={key}>{String(value)}</td>
            ))}
          </tr>
        ));
    }
  };

  return (
    <T
      size={size}
      variant={variant}
      striped={striped}
      bordered={bordered}
      hover={hover}
      borderless={borderless}
    >
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </T>
  );
};

export default Table;
