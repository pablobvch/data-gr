import React, { useState } from "react";
import { Form, FormGroup, Container, Label } from "reactstrap";
//import ReactHighcharts from "react-highcharts";

import DropDowns from "../../components/drop-downs";
import Textarea from "../../components/textarea";

const initialState = { columns: [], fileContent: "", errorMessage: "" };

//const config = {};

const LineGraphs = () => {
  const [state, updateState] = useState(initialState);

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label>Paste your cvs</Label>
          <Textarea {...{ state, updateState }}></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Select Axles</Label>
          <DropDowns {...{ state, updateState }} />
        </FormGroup>
      </Form>
      {/*<ReactHighcharts {...config}></ReactHighcharts>*/}
    </Container>
  );
};

export default LineGraphs;
