import React from "react";
import SelectControl from "../../components/painter/controls/SelectControl";
import ToggleControl from "../../components/painter/controls/ToggleControl";
import ApiTableSettings from "./api";
import CustomTableSettings from "./custom";
import RenderTableSettings from "./render";
import useWidgetSettings from "../../hooks/useWidgetSettings";
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
        return /*#__PURE__*/React.createElement(ApiTableSettings, null);

      case sourceTypes.CUSTOM:
        return /*#__PURE__*/React.createElement(CustomTableSettings, null);

      case sourceTypes.RENDER:
        return /*#__PURE__*/React.createElement(RenderTableSettings, null);

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u0430\u043D\u043D\u044B\u0445",
    value: dataFrom,
    onChange: setDataFrom,
    list: sourceTypesList
  }), showSettings(), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0422\u0435\u043C\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
    value: variant,
    onChange: setVariant,
    list: [{
      name: "Светлая",
      value: ""
    }, {
      name: "Темная",
      value: "dark"
    }]
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
    value: size,
    onChange: setSize,
    list: [{
      name: "Обычный",
      value: ""
    }, {
      name: "Уменьшенный",
      value: "sm"
    }]
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    name: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u0447\u0435\u0442\u043D\u044B\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",
    value: striped,
    onChange: setStriped
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    name: "\u0412\u044B\u0434\u0435\u043B\u044F\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438",
    value: hover,
    onChange: setHover
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    name: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0440\u0430\u043D\u0438\u0446\u044B",
    value: bordered,
    onChange: setBordered
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    name: "\u0423\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0433\u0440\u0430\u043D\u0438\u0446\u044B",
    value: borderless,
    onChange: setBorderless
  }));
};

export default TableSettings;