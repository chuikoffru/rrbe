import React from "react";

const Divider = (props) => {
  console.log("props", props);
  return (
    <hr
      style={{
        borderTopWidth: parseInt(props.size) || 2,
        borderTopColor: props.color,
        breakAfter: props.breakAfter,
      }}
    />
  );
};

export default Divider;
