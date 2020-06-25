import React from "react";
import Wysiwyg from "components/painter/controls/wysiwyg";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import SelectControl from "components/painter/controls/SelectControl";

const TextSettings = () => {
  const [wordBreak, setWordBreak] = useWidgetSettings(
    "styles.wordBreak",
    "normal"
  );
  return (
    <div className="my-3">
      <Wysiwyg propery="text" />
      <SelectControl
        name="Перенос строк"
        value={wordBreak}
        onChange={setWordBreak}
        list={[
          { name: "По-умолчанию", value: "normal" },
          { name: "Автоматический перенос", value: "break-all" },
          { name: "Не переносить", value: "keep-all" },
        ]}
      />
    </div>
  );
};

export default TextSettings;
