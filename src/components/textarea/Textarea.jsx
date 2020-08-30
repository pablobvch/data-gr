import React from "react";
import { Label } from "reactstrap";
import Papa from "papaparse";

const getHeaders = (fileContent) =>
  fileContent.substr(0, fileContent.indexOf("\n")).split(",");

const validateCvs = (fileContent) =>
  Papa.parse(fileContent, {
    header: true
  }).errors.length === 0;

const onClickHandler = (state, updateState) => () =>
  validateCvs(state.fileContent)
    ? updateState((state) => ({
        ...state,
        errorMessage: "",
        columns: getHeaders(state.fileContent)
      }))
    : updateState((state) => ({
        ...state,
        errorMessage: "invalid",
        columns: []
      }));

const Textarea = ({ state, updateState }) => (
  <div>
    <textarea
      name="textarea"
      rows="10"
      cols="50"
      value={state.fileContent}
      onChange={(e) => updateState({ ...state, fileContent: e.target.value })}
    ></textarea>
    <br />
    <Label className="text-danger">{state.errorMessage}</Label>
    <br />
    <button type="button" onClick={onClickHandler(state, updateState)}>
      process
    </button>
  </div>
);

export default Textarea;
