import React, { useState } from "react";
import { connect } from "react-redux";
import * as characterActions from "../../../redux/actions/characterActions";
import { bindActionCreators } from "redux";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import PlainCard from "../../common/PlainCard/PlainCard";
import BasicCharacterInformation from "./BasicCharacterInformation/BasicCharacterInformation";
import AppearanceCharacterInformation from "./AppearanceCharacterInformation/AppearanceCharacterInformation";
import Button from "../../common/Button/Button";
import "./CharacterAdd.scss";

const CharacterAdd = props => {
  const [basicFormValues, setBasicFormValues] = React.useState({});
  const [appearanceFormValues, setAppearanceFormValues] = React.useState({});

  function handleBasicFormChange(e) {
    const targetEl = e.target;
    const fieldName = targetEl.name;
    setBasicFormValues({
      ...basicFormValues,
      [fieldName]: targetEl.value
    });
  }

  function handleAppearanceFormChange(e) {
    const targetEl = e.target;
    const fieldName = targetEl.name;
    setAppearanceFormValues({
      ...appearanceFormValues,
      [fieldName]: targetEl.value
    });
  }

  const onSubmit = () => {
    setBasicFormValues({
      ...basicFormValues,
      characterAppearanceValues: appearanceFormValues
    });
    props.actions.saveCharacter(basicFormValues);
  };

  return (
    <React.Fragment>
      <div className="add-character">
        <BasicCharacterInformation onChange={handleBasicFormChange} />
        <AppearanceCharacterInformation onChange={handleAppearanceFormChange} />
        <Button type="submit" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </React.Fragment>
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
