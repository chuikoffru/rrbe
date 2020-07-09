import React from "react";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import SelectControl from "../../components/painter/controls/SelectControl";
import fakeCategories from "./fakeCategories";

const NewsSettings = () => {
  const [category, setCategory] = useWidgetSettings("category", "");
  return /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439",
    value: category,
    onChange: setCategory,
    list: fakeCategories
  });
};

export default NewsSettings;