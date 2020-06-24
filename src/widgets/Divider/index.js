import React from "react";

const Divider = (props) => {
  return (
    <hr
      style={{
        borderTopWidth: parseInt(props.size),
        borderTopColor: props.color,
      }}
    />
  );
};

export default Divider;
