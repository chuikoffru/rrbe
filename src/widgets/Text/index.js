import React from "react";
import { useDispatch } from "react-redux";
import { changeWidget } from "redux/sections/actions";

const Text = (props) => {
  const dispatch = useDispatch();

  console.log("text props", props);

  const saveText = (e) => {
    dispatch(
      changeWidget({
        ...props,
        text: e.currentTarget.innerHTML,
      })
    );
  };

  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={true}
      onBlur={saveText}
      //style={{ ...props.styles }}
    >
      {props.text}
    </div>
  );
};

export default Text;
