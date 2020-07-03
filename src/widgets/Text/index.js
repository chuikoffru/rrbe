import React from "react";
import useWidgetSettings from "hooks/useWidgetSettings";

const Text = (props) => {
  const [, setText] = useWidgetSettings("text");

  const saveText = (e) => setText(e.currentTarget.innerHTML);

  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={props.editable}
      onBlur={saveText}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};

export default Text;
