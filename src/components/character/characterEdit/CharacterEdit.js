import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as characterActions from "../../../redux/actions/characterActions";
import { bindActionCreators } from "redux";
import AppearanceCharacterInformation from "../appearanceCharacterInformation/appearanceCharacterInformation";
import BasicCharacterInformation from "../basicCharacterInformation/basicCharacterInformation";

const CharacterEdit = ({ actions, location, characters }) => {
  const [character, setCharacter] = React.useState({});

  useEffect(() => {
    setCharacter(
      characters.find(
        character => character.actorCharacterId === location.state.id
      )
    );
  }, [characters]);

  const onSubmitCharacter = async values => {
    actions.saveCharacter(values);
  };

  const onSubmitAppearance = async values => {
    console.log(values);
    actions.saveAppearance(values);
  };

  return (
    <React.Fragment>
      <div className="add-character">
        <BasicCharacterInformation
          onSubmit={onSubmitCharacter}
          initialValues={character}
        />
        <AppearanceCharacterInformation onSubmit={onSubmitAppearance} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CharacterEdit);
