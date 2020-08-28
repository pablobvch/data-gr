import React from "react";

const getHeaders = (fileContent) =>
  fileContent.substr(0, fileContent.indexOf("\n")).split(",");

const onClickHandler = (state, updateState) => () =>
  updateState((state) => ({
    ...state,
    columns: getHeaders(state.fileContent)
  }));

function Textarea({ state, updateState }) {
  return (
    <div>
      <textarea
        name="textarea"
        rows="10"
        cols="50"
        value={state.fileContent}
        onChange={(e) => updateState({ ...state, fileContent: e.target.value })}
      ></textarea>
      <br />
      <button type="button" onClick={onClickHandler(state, updateState)}>
        process
      </button>
    </div>
  );
}

export default Textarea;
