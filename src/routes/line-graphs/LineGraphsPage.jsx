import React, { useState } from "react";

import DropDowns from "../../components/drop-downs";
import Textarea from "../../components/textarea";
import { Form, FormGroup, Container, Label } from "reactstrap";

const initialState = { fileContent: "", columns: [] };

function LineGraphs() {
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
    </Container>
  );
}

export default LineGraphs;
