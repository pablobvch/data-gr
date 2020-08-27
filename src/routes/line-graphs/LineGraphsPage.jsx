import React, { useState } from "react";

import DropDowns from "../../components/drop-downs";
import Textarea from "../../components/textarea";
import Navbar from "../../components/navbar/";

const renderNavbar = () => <Navbar />;

const initialState = { fileContent: "", result: "" };

function LineGraphs() {
  const [state, updateState] = useState(initialState);

  return (
    <div>
      {renderNavbar()}
      <Textarea {...{ state }} updateState={updateState}></Textarea>
      <DropDowns {...{ state }} />
      {state.result}
    </div>
  );
}

export default LineGraphs;
