import React from "react";
import { Form, FormGroup, Container, Label } from "reactstrap";

import DropDowns from "../../components/drop-downs";
import Textarea from "../../components/textarea";
import ReactHighcharts from "react-highcharts";

const shouldRenderChart = (seriesData, categories) =>
  seriesData.length > 0 && categories.length > 0;

const renderChart = ({ seriesData, categories }, config) =>
  shouldRenderChart(seriesData, categories) ? (
    <ReactHighcharts {...{ config }}></ReactHighcharts>
  ) : (
    false
  );

const renderForm = (
  state,
  onChangeHandler,
  onClickHandler,
  onXAxisChange,
  onYAxisChange
) => (
  <Form>
    <FormGroup>
      <Label>Paste your cvs</Label>
      <Textarea {...{ state, onClickHandler, onChangeHandler }}></Textarea>
    </FormGroup>
    <FormGroup>
      <Label>Select Axles</Label>
      <DropDowns {...{ state, onXAxisChange, onYAxisChange }} />
    </FormGroup>
  </Form>
);

const LineGraphsPageView = ({
  state,
  config,
  onClickHandler,
  onChangeHandler,
  onYAxisChange,
  onXAxisChange
}) => (
  <Container>
    {renderForm(
      state,
      onChangeHandler,
      onClickHandler,
      onXAxisChange,
      onYAxisChange
    )}
    {renderChart(state, config)}
  </Container>
);

export default LineGraphsPageView;
