import React from "react";
import { Label } from "reactstrap";

const Textarea = ({ state, onClickHandler, onChangeHandler }) => (
  <div>
    <textarea
      name="textarea"
      rows="10"
      cols="50"
      value={state.fileContent}
      onChange={onChangeHandler}
    ></textarea>
    <br />
    <Label className="text-danger">{state.errorMessage}</Label>
    <br />
    <button type="button" onClick={onClickHandler(state)}>
      process
    </button>
  </div>
);

export default Textarea;
