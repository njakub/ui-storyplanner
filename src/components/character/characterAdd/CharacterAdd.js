import React, { useState } from "react";
import { connect } from "react-redux";
import * as characterActions from "../../../redux/actions/characterActions";
import { bindActionCreators } from "redux";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import BasicCharacterInformation from "../basicCharacterInformation/basicCharacterInformation";
import { useHistory } from "react-router-dom";
import "./characterAdd.scss";

const CharacterAdd = ({ actions }) => {
  const history = useHistory();
  const onSubmitCharacter = async values => {
    actions.saveCharacter(values).then(async resp => {
      await actions.loadCharacters();
      history.push({
        pathname: "/characters/edit",
        state: { id: resp.actorCharacterId }
      });
    });
  };

  return (
    <React.Fragment>
      <div className="add-character">
        <BasicCharacterInformation onSubmit={onSubmitCharacter} />
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
