import React, { useState } from "react";
import useWidgetSettings from "hooks/useWidgetSettings";

const Text = (props) => {
  const [editable, setEditable] = useState(false);
  const [, setText] = useWidgetSettings("text", "");

  const saveText = (e) => {
    setText(e.currentTarget.innerHTML);
    setEditable(false);
  };

  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={editable}
      onDoubleClick={() => setEditable(true)}
      onBlur={saveText}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};

export default Text;
