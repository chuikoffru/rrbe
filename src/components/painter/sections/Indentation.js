import React from "react";
import { Form } from "react-bootstrap";
import RangeControl from "../controls/RangeControl";

import useSectionSettings from "hooks/useSectionSettings";

const Indentation = () => {
  console.log("Indentation init");
  const [margin, setMargin] = useSectionSettings("styles.margin", 0);
  const [padding, setPadding] = useSectionSettings("styles.padding", 0);
  return (
    <Form>
      <RangeControl
        name="Внешний отступ"
        value={margin}
        onChange={setMargin}
        options={{
          min: 0,
          step: 0.1,
          max: 10,
          appendix: "rem",
        }}
      />
      <RangeControl
        name="Внутренний отступ"
        value={padding}
        onChange={setPadding}
        options={{
          min: 0,
          step: 0.1,
          max: 10,
          appendix: "rem",
        }}
      />
    </Form>
  );
};

export default Indentation;
