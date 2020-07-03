import React from "react";
import ReactQuill from "react-quill";

import "./quill.rrbe.scss";

const Wysiwyg = ({ value, onChange, options = {} }) => {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ script: "sub" }, { script: "super" }],
        ["clean"],
      ],
    },
  };

  return (
    <ReactQuill {...options} theme="snow" modules={modules} value={value} onChange={onChange} />
  );
};

Wysiwyg.propTypes = {};

export default Wysiwyg;
