import React from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";

const DropSectionContainer = ({ accept, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={classNames({
        dropSection: true,
        canDrop,
        isActive: isOver && canDrop,
      })}
    >
      <div className="text-center">Перетащи сюда секцию или компонент</div>
    </div>
  );
};

export default DropSectionContainer;
