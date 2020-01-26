import React from "react";
import { Formik } from "formik";

const Form = props => {
  return (
    <Formik onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="lastName"
            placeholder="Doe"
            label="Last Name"
            fullWidth
            component={MyInput}
          />
          <Button type="submit" variant="raised" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Form;
