import React, { useState } from "react";
import { connect } from "react-redux";
import * as characterActions from "../../../redux/actions/characterActions";
import { bindActionCreators } from "redux";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const CharacterAdd = props => {
  const [character, setCharacter] = useState({
    firstName: "",
    secondName: ""
  });

  const updateField = event => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.actions.createCharacter(character);
    // console.log(character);
  };

  const characterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
  });

  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validationSchema={characterSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                type="text"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickName">Nickname</label>
              <Field
                name="nickName"
                type="text"
                className={
                  "form-control" +
                  (errors.nickName && touched.nickName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="nickName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => {
  return { characters: state.characters };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(characterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterAdd);
