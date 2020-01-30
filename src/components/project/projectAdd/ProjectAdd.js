import React, { useState } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../../redux/actions/projectActions";
import { bindActionCreators } from "redux";
import Button from "../../common/Button/Button";
import TextInput from "../../common/textInput/TextInput";
import { Formik, Form, ErrorMessage, Field } from "formik";
import PlainCard from "../../common/PlainCard/PlainCard";

const ProjectAdd = props => {
  const onProjectSubmit = async values => {
    console.log(values);
    props.actions.saveProject(values);
  };

  return (
    <div className="basic-information-card">
      <PlainCard title="Project Information">
        <Formik onSubmit={async values => onProjectSubmit(values)}>
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                name="storyProjectName"
                label="Name"
                component={TextInput}
                value={values.storyProjectName}
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

const mapStateToProps = state => {
  return { projects: state.projects };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAdd);
