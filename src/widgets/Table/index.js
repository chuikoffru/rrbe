import React, { useEffect, useState } from "react";
import { Table as T } from "react-bootstrap";
import { sourceTypes } from "./sourceTypes";
import getDataFromApi from "./helpers/getDataFromApi";

const Table = ({ dataFrom, api, columns, rows }) => {
  const [header, setHeader] = useState(columns || []);
  const [data, setData] = useState(rows || []);

  useEffect(() => {
    if (dataFrom === sourceTypes.API.value && api) {
      (async () => {
        const data = await getDataFromApi(api);
        if (data) {
          setHeader(Object.keys(data[0]));
          setData(data);
        }
      })();
    }
  }, [api, dataFrom]);

  return (
    <T>
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, keyRow) => (
          <tr key={keyRow}>
            {Object.entries(row).map(([key, value]) => (
              <td key={key}>{String(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </T>
  );
};

export default Table;
