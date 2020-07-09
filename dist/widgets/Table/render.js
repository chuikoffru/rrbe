import React, { useCallback } from "react";
import InputControl from "../../components/painter/controls/InputControl";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import mutate from "dot-prop-immutable";

const RenderTableSettings = () => {
  const [columns] = useWidgetSettings("columns", []);
  const [rows, setRows] = useWidgetSettings("rows", []);
  const [variable, setVariable] = useWidgetSettings("variable", "");
  const handleChange = useCallback((name, value) => {
    const row = mutate.set(rows, `0`, { ...rows[0],
      [name]: value
    });
    setRows(row);
  }, [rows, setRows]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputControl, {
    name: "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0446\u0438\u043A\u043B\u0430",
    value: variable,
    onChange: setVariable
  }), columns.map((name, key) => /*#__PURE__*/React.createElement(InputControl, {
    key: key,
    name: name,
    value: rows.length > 0 ? rows[0][name] : "",
    onChange: value => handleChange(name, value)
  })));
};

export default RenderTableSettings;