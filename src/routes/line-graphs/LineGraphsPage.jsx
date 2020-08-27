import React, { useState } from "react";

import DropDowns from "../../components/drop-downs";
import Textarea from "../../components/textarea";

const initialState = { fileContent: "", result: "" };

function LineGraphs() {
  const [state, updateState] = useState(initialState);

  return (
    <div>
      <Textarea {...{ state }} updateState={updateState}></Textarea>
      <DropDowns {...{ state }} />
      {state.result}
    </div>
  );
}

export default LineGraphs;
