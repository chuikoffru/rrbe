import React from "react";
import useWidgetSettings from "hooks/useWidgetSettings";
import WysiwygInlineControl from "../../components/painter/controls/WysiwygInlineControl";

const Text = (props) => {
  const [, setText] = useWidgetSettings("text");

  const saveText = (e) => {
    console.log("e", e);
    setText(e);
  };

  return <WysiwygInlineControl value={props.text} onChange={saveText} />;
};

export default Text;
