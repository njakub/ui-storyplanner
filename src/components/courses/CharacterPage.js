import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as characterActions from "../../redux/actions/characterActions";
import * as projectActions from "../../redux/actions/projectActions";
import { bindActionCreators } from "redux";
import CharacterList from "./CharacterList";

const CharacterPage = props => {
  useEffect(() => {
    props.actions.loadCharacters().catch(error => {
      alert("Loading Characters Failed: " + error);
    });
    props.actions.loadProjects().catch(error => {
      alert("Loading Projects Failed: " + error);
    });
  }, []);

  return <CharacterList characters={props.characters} />;
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    // state.projects.length === 0
    //   ? []
    //   : state.characters.map(character => {
    //       return {
    //         ...character,
    //         projectName: state.projects.find(p => p.id === character.id).name
    //       };
    //     }),
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCharacters: bindActionCreators(
        characterActions.loadCharacters,
        dispatch
      ),
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
    }
  };
};

CharacterPage.propTypes = {
  characters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPage);
