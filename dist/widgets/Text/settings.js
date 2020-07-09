import React from "react";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import SelectControl from "../../components/painter/controls/SelectControl";
import RangeControl from "../../components/painter/controls/RangeControl";

const TextSettings = () => {
  const [wordBreak, setWordBreak] = useWidgetSettings("styles.wordBreak", "normal");
  const [textTransform, setTextTransform] = useWidgetSettings("styles.textTransform", "none");
  const [fitContent, setFitContent] = useWidgetSettings("styles.width", "100%");
  const [lineHeight, setLineHeight] = useWidgetSettings("styles.lineHeight", "1.5rem");
  const [letterSpacing, setLetterSpacing] = useWidgetSettings("styles.letterSpacing", "0rem");
  return /*#__PURE__*/React.createElement("div", {
    className: "my-3"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    name: "\u041C\u0435\u0436\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
    value: lineHeight,
    onChange: setLineHeight,
    options: {
      min: 1.0,
      max: 2.5,
      step: 0.1,
      appendix: "rem"
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    name: "\u041C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
    value: letterSpacing,
    onChange: setLetterSpacing,
    options: {
      min: 0.0,
      max: 0.25,
      step: 0.01,
      appendix: "rem"
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440 \u0442\u0435\u043A\u0441\u0442\u0430",
    value: textTransform,
    onChange: setTextTransform,
    list: [{
      name: "По-умолчанию",
      value: "none"
    }, {
      name: "Все символы строчные",
      value: "lowercase"
    }, {
      name: "Все символы заглавные",
      value: "uppercase"
    }]
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430",
    value: fitContent,
    onChange: setFitContent,
    list: [{
      name: "На всю ширину секции",
      value: "100%"
    }, {
      name: "Под ширину контента",
      value: "fit-content"
    }]
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0441\u0442\u0440\u043E\u043A",
    value: wordBreak,
    onChange: setWordBreak,
    list: [{
      name: "По-умолчанию",
      value: "normal"
    }, {
      name: "Автоматический перенос",
      value: "break-all"
    }, {
      name: "Не переносить",
      value: "keep-all"
    }]
  }));
};

export default TextSettings;