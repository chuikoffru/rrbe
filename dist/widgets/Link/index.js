import React from "react";

const Link = props => {
  return /*#__PURE__*/React.createElement("a", {
    className: props.isButton ? "btn btn-primary" : "",
    href: props.url,
    target: props.target
  }, props.text);
};

export default Link;