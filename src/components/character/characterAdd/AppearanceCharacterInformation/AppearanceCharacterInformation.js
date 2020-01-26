import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import PlainCard from "../../../common/PlainCard/PlainCard";
import TextInput from "../../../common/textInput/TextInput";

const AppearanceCharacterInformation = ({ handleChange, onChange }) => {
  return (
    <div className="basic-information-card">
      <PlainCard title="Appearance">
        <Formik>
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                name="eyeColor"
                label="Eye Color"
                component={TextInput}
                value={values.eyeColor}
                onChange={onChange}
              />
              <Field
                name="hairColor"
                label="Hair Color"
                component={TextInput}
                value={values.hairColor}
                onChange={onChange}
              />
              <Field
                name="build"
                label="Build"
                component={TextInput}
                value={values.build}
                onChange={onChange}
              />
              <Field
                name="levelOfGrooming"
                label="Level Of Grooming"
                component={TextInput}
                value={values.levelOfGrooming}
                onChange={onChange}
              />
              <Field
                name="wearsGlasses"
                label="Wears Glasses?"
                component={TextInput}
                value={values.wearsGlasses}
                onChange={onChange}
              />
            </Form>
          )}
        </Formik>
      </PlainCard>
    </div>
  );
};

export default AppearanceCharacterInformation;
