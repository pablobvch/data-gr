import React from "react";
import styled from "styled-components";

const renderOption = (column, selectName, index) => (
  <option key={`${selectName}${index}`}>{column}</option>
);

const renderOptionsUsing = (columns, selectName) =>
  columns.map((column, index) => renderOption(column, selectName, index));

const shouldRenderOptions = (columns) => columns.length > 0;

const renderOptions = (columns, selectName) =>
  shouldRenderOptions(columns)
    ? renderOptionsUsing(columns, selectName)
    : false;

const StyledSelect = styled.select`
  margin: 4px;
`;

const DropDowns = ({ state: { columns }, updateState }) => (
  <div>
    <StyledSelect>
      <option>X AXIS</option>
      {renderOptions(columns, "X")}
    </StyledSelect>
    <StyledSelect>
      <option>Y AXIS</option>
      {renderOptions(columns, "Y")}
    </StyledSelect>
  </div>
);

export default DropDowns;
