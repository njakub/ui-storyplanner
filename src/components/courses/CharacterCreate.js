import React, { useState } from "react";
import { connect } from "react-redux";
import * as characterActions from "../../redux/actions/characterActions";
import { bindActionCreators } from "redux";

const EditCharacterPage = props => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Character</h3>
        <label>
          First Name:
          <input
            type="text"
            onChange={updateField}
            value={character.name}
            name="firstName"
          />
        </label>
        <label>
          Second Name:
          <input
            type="text"
            onChange={updateField}
            value={character.name}
            name="secondName"
          />
        </label>
        <input type="submit" value="Save" />
      </form>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCharacterPage);
