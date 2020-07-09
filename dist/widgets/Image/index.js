import React from "react";

const Image = props => {
  return /*#__PURE__*/React.createElement("img", {
    alt: props.alt,
    src: props.src,
    width: props.width
  });
};

export default Image;