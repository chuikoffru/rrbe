import React from "react";
//import JoditEditor from "jodit-react";
import useWidgetSettings from "hooks/useWidgetSettings";

import "./text.scss";
import TextControl from "../../components/painter/controls/TextControl";

const TextSettings = () => {
  const [content, setContent] = useWidgetSettings("text", "<p></p>");

  return (
    <div className="my-3">
      <TextControl name="Текст" value={content} onChange={setContent} />
      {/* <JoditEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
        //onBlur={(newContent) => setContent(newContent)}
      /> */}
    </div>
  );
};

export default TextSettings;
