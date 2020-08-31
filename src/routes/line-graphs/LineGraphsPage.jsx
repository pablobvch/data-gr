import React, { useState } from "react";
import Papa from "papaparse";

import LineGraphsPageView from "./LineGraphsPageView";

const initialState = {
  categories: [],
  data: [],
  errorMessage: "",
  fileContent: "",
  headers: [],
  seriesData: [],
  xAxisValue: null,
  yAxisValue: null
};

const getDataFromAxisValue = (data, axisValue) => data.map((d) => d[axisValue]);

const getData = (fileContent) =>
  Papa.parse(fileContent, {
    header: true,
    delimiter: ","
  }).data;

const getHeaders = (fileContent) =>
  Papa.parse(fileContent, {
    header: true,
    delimiter: ","
  }).meta.fields;

const validateCvs = (fileContent) =>
  Papa.parse(fileContent, {
    header: true,
    delimiter: ","
  }).errors.length === 0;

const getHandlers = (state, updateState) => ({
  onChangeHandler: (e) =>
    updateState({ ...state, fileContent: e.target.value }),

  onClickHandler: (state) => () =>
    validateCvs(state.fileContent)
      ? updateState((state) => ({
          ...state,
          errorMessage: "",
          headers: getHeaders(state.fileContent),
          data: getData(state.fileContent)
        }))
      : updateState((state) => ({
          ...state,
          errorMessage: "invalid",
          headers: [],
          data: getData(state.fileContent)
        })),

  onYAxisChange: (value) =>
    updateState((state) => ({
      ...state,
      yAxisValue: value,
      seriesData: getDataFromAxisValue(state.data, value)
    })),

  onXAxisChange: (value) =>
    updateState((state) => ({
      ...state,
      xAxisValue: value,
      categories: getDataFromAxisValue(state.data, value)
    }))
});

const LineGraphs = () => {
  const [state, updateState] = useState(initialState);

  const config = {
    xAxis: {
      categories: state.categories
    },
    series: [
      {
        data: state.seriesData.map(Number)
      }
    ]
  };

  return (
    <LineGraphsPageView
      {...{ state, updateState, config }}
      {...getHandlers(state, updateState)}
    />
  );
};

export default LineGraphs;
