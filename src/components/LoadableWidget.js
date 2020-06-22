import React, { Suspense, useCallback, useMemo } from "react";
import loadable from "@loadable/component";
import loadWidget from "helpers/loadWidget";
import { selectWidget } from "redux/sections/actions";
import { useDispatch } from "react-redux";

const LoadableWidget = ({ widget, sectionIndex, rowIndex, columnIndex }) => {
  const dispatch = useDispatch();
  const WidgetComponent = useMemo(
    () => loadable(() => loadWidget(widget.name)),
    [widget]
  );

  // Выбираем виджет
  const setSelectedWidget = useCallback(
    (event, columnIndex, rowIndex) => {
      event.stopPropagation();
      dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widget.name));
    },
    [dispatch, sectionIndex, widget.name]
  );

  const { styles, applyStylesToWidget } = widget.params;

  return (
    <div
      className="rrbe__widget"
      style={applyStylesToWidget ? styles : {}}
      id={widget.id}
      key={rowIndex}
      onClickCapture={(event) =>
        setSelectedWidget(event, columnIndex, rowIndex, widget.name)
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <WidgetComponent {...widget.params} />
      </Suspense>
    </div>
  );
};

export default LoadableWidget;
