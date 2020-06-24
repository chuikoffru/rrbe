import React from "react";
import ReactQuill from "react-quill";
import useWidgetSettings from "hooks/useWidgetSettings";

import "./quill.rrbe.scss";

const Wysiwyg = ({ propery, options = {} }) => {
  const [content, setContent] = useWidgetSettings(propery, "<p></p>");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ script: "sub" }, { script: "super" }],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      {...options}
      theme="snow"
      modules={modules}
      value={content}
      onChange={setContent}
      onBlur={(r, s, editor) => setContent(editor.getHTML())}
    />
  );
};

Wysiwyg.propTypes = {};

export default Wysiwyg;
