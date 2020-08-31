import React from "react";
import styled from "styled-components";

const renderOption = (header, selectName, index) => (
  <option key={`${selectName}${index}`} value={header}>
    {header}
  </option>
);

const renderOptionsUsing = (headers, selectName) =>
  headers.map((header, index) => renderOption(header, selectName, index));

const shouldRenderOptions = (headers) => headers.length > 0;

const renderOptions = (headers, selectName) =>
  shouldRenderOptions(headers)
    ? renderOptionsUsing(headers, selectName)
    : false;

const StyledSelect = styled.select`
  margin: 4px;
`;

const DropDowns = ({ state, onXAxisChange, onYAxisChange }) => (
  <div>
    <StyledSelect onChange={(event) => onXAxisChange(event.target.value)}>
      <option>X AXIS</option>
      {renderOptions(state.headers, "X")}
    </StyledSelect>
    <StyledSelect onChange={(event) => onYAxisChange(event.target.value)}>
      <option>Y AXIS</option>
      {renderOptions(state.headers, "Y")}
    </StyledSelect>
  </div>
);

export default DropDowns;
