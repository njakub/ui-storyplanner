import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import PlainCard from "../../common/PlainCard/PlainCard";
import TextInput from "../../common/textInput/TextInput";
import Button from "../../common/Button/Button";

const AppearanceCharacterInformation = ({
  handleChange,
  onChange,
  onSubmit
}) => {
  return (
    <div className="basic-information-card">
      <PlainCard title="Appearance">
        <Formik onSubmit={async values => onSubmit(values)}>
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                name="eyeColor"
                label="Eye Color"
                component={TextInput}
                value={values.eyeColor}
              />
              <Field
                name="hairColor"
                label="Hair Color"
                component={TextInput}
                value={values.hairColor}
              />
              <Field
                name="build"
                label="Build"
                component={TextInput}
                value={values.build}
              />
              <Field
                name="levelOfGrooming"
                label="Level Of Grooming"
                component={TextInput}
                value={values.levelOfGrooming}
              />
              <Field
                name="wearsGlasses"
                label="Wears Glasses?"
                component={TextInput}
                value={values.wearsGlasses}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </PlainCard>
    </div>
  );
};

export default AppearanceCharacterInformation;
