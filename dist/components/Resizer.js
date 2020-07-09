import React, { useState, useCallback } from "react";

const Resizer = ({
  width,
  setWidth
}) => {
  const [resizable, setResizable] = useState(false);
  const move = useCallback(event => {
    event.persist();
    event.preventDefault();

    if (resizable) {
      setWidth(event.clientX);
    }
  }, [resizable, setWidth]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rrbe__resizer",
    onMouseDown: e => setResizable(true),
    onMouseMove: move
  });
};

export default /*#__PURE__*/React.memo(Resizer);