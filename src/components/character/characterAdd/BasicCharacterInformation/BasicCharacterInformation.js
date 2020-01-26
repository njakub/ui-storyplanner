import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import PlainCard from "../../../common/PlainCard/PlainCard";
import "./BasicCharacterInformation.scss";
import TextInput from "../../../common/textInput/TextInput";

const BasicCharacterInformation = ({ handleChange, onChange }) => {
  return (
    <div className="basic-information-card">
      <PlainCard title="Basic Information">
        <Formik>
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                name="title"
                label="Title"
                component={TextInput}
                value={values.title}
                onChange={onChange}
              />
              <Field
                name="firstName"
                label="First Name"
                component={TextInput}
                value={values.firstName}
                onChange={onChange}
              />
              <Field
                name="lastName"
                label="Last Name"
                component={TextInput}
                value={values.lastName}
                onChange={onChange}
              />
              <Field
                name="nickName"
                label="Nickname"
                component={TextInput}
                value={values.nickName}
                onChange={onChange}
              />
              <Field
                name="age"
                label="Age"
                component={TextInput}
                value={values.age}
                onChange={onChange}
              />
              <Field
                name="placeOfBirth"
                label="Place Of Birth"
                component={TextInput}
                value={values.placeOfBirth}
                onChange={onChange}
              />
              <Field
                name="nationality"
                label="Nationality"
                component={TextInput}
                value={values.nationality}
                onChange={onChange}
              />
              <Field
                name="occupation"
                label="Occupation"
                component={TextInput}
                value={values.occupation}
                onChange={onChange}
              />
              <Field
                name="income"
                label="Income"
                component={TextInput}
                value={values.income}
                onChange={onChange}
              />
              <Field
                name="education"
                label="Education"
                component={TextInput}
                value={values.education}
                onChange={onChange}
              />
              <Field
                name="status"
                label="Status/Class"
                component={TextInput}
                value={values.status}
                onChange={onChange}
              />
            </Form>
          )}
        </Formik>
      </PlainCard>
    </div>
  );
};

export default BasicCharacterInformation;