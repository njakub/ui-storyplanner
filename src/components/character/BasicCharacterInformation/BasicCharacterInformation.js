import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import PlainCard from "../../common/plainCard/plainCard";
import "./basicCharacterInformation.scss";
import TextInput from "../../common/textInput/textInput";
import Button from "../../common/button/button";

const BasicCharacterInformation = ({
  handleChange,
  onSubmit,
  initialValues = {}
}) => {
  return (
    <div className="basic-information-card">
      <PlainCard title="Basic Information">
        <Formik
          enableReinitialize
          onSubmit={async values => onSubmit(values)}
          initialValues={initialValues}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                name="title"
                label="Title"
                component={TextInput}
                value={values.title}
              />
              <Field
                name="firstName"
                label="First Name"
                component={TextInput}
                value={values.firstName}
              />
              <Field
                name="lastName"
                label="Last Name"
                component={TextInput}
                value={values.lastName}
              />
              <Field
                name="nickName"
                label="Nickname"
                component={TextInput}
                value={values.nickName}
              />
              <Field
                name="age"
                label="Age"
                component={TextInput}
                value={values.age}
              />
              <Field
                name="placeOfBirth"
                label="Place Of Birth"
                component={TextInput}
                value={values.placeOfBirth}
              />
              <Field
                name="nationality"
                label="Nationality"
                component={TextInput}
                value={values.nationality}
              />
              <Field
                name="occupation"
                label="Occupation"
                component={TextInput}
                value={values.occupation}
              />
              <Field
                name="income"
                label="Income"
                component={TextInput}
                value={values.income}
              />
              <Field
                name="education"
                label="Education"
                component={TextInput}
                value={values.education}
              />
              <Field
                name="status"
                label="Status/Class"
                component={TextInput}
                value={values.status}
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

export default BasicCharacterInformation;
