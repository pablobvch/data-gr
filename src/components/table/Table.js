import React from "react";
import { Table as RSTable } from "reactstrap";

const renderRowUsing = (row) =>
  Object.keys(row).map((column) => <td>{row[column]}</td>);

const renderRow = (row) => <tr>{renderRowUsing(row)}</tr>;

const renderRows = (data) => <tbody>{data.map((row) => renderRow(row))}</tbody>;

const renderHeaderUsing = (headers) =>
  headers.map((header) => <th>{header}</th>);

const renderHeader = (headers) => (
  <thead>
    <tr>{renderHeaderUsing(headers)}</tr>
  </thead>
);

const Table = ({ headers, data }) => (
  <RSTable>
    {renderHeader(headers)}
    {renderRows(data)}
  </RSTable>
);

export default Table;
