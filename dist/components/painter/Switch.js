import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useWidgetSettings from "../../hooks/useWidgetSettings";

const Switch = () => {
  const [applyStyles, setApplyStyles] = useWidgetSettings("applyStylesToWidget", true);
  return /*#__PURE__*/React.createElement(BootstrapSwitchButton, {
    checked: applyStyles,
    onlabel: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438",
    onstyle: "success",
    offlabel: "\u0421\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438",
    offstyle: "danger",
    onChange: checked => {
      setApplyStyles(checked);
    }
  });
};

export default Switch;