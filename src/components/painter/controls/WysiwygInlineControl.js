import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "tinymce/tinymce.min.js";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/table";
import "tinymce/plugins/autolink";

import "tinymce/skins/ui/oxide/skin.min.css";

const WysiwygInlineControl = ({ value, onChange, disabled = false }) => {
  const [text, setText] = useState(value);

  return (
    <Editor
      value={text}
      onEditorChange={(content) => setText(content)}
      onBlur={() => onChange(text)}
      inline={true}
      disabled={disabled}
      init={{
        removed_menuitems: "newdocument",
        menubar: true,
        plugins: ["autolink insertdatetime table"],
        toolbar: `formatselect | bold italic | 
    alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |
    removeformat | undo redo`,
      }}
    />
  );
};

export default WysiwygInlineControl;
