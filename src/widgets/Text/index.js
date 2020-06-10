import React from "react";
import { useDispatch } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

const Text = (props) => {
  const dispatch = useDispatch();

  const saveText = (e) => {
    dispatch(changeWidget({ ...props, text: e.currentTarget.innerHTML }));
  };

  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={true}
      onBlur={saveText}
    >
      {props.text}
    </div>
  );
};

export default Text;
