import React, { useRef } from "react";
import AceEditor from "react-ace";
import beautify from "js-beautify/js/lib/beautify-html";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

const Export = ({ html }) => {
  const ref = useRef();

  return (
    <AceEditor
      ref={ref}
      setOptions={{
        useWorker: false,
        readOnly: true,
      }}
      mode="html"
      theme="monokai"
      name="export"
      value={beautify.html_beautify(html)}
    />
  );
};

export default Export;
