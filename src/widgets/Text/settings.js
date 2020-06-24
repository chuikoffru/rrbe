import React from "react";
import JoditEditor from "jodit-react";
import useWidgetSettings from "hooks/useWidgetSettings";

import "./text.scss";

const TextSettings = () => {
  const [content, setContent] = useWidgetSettings("text", "<p></p>");

  return (
    <div className="my-3">
      <JoditEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default TextSettings;
