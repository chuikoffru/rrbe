import React from "react";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import WysiwygInlineControl from "../../components/painter/controls/WysiwygInlineControl";

const Text = props => {
  const [, setText] = useWidgetSettings("text");
  return /*#__PURE__*/React.createElement(WysiwygInlineControl, {
    value: props.text,
    onChange: text => setText(text)
  });
};

export default Text;