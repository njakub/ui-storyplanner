import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Table from "../../common/table/table";
import { connect } from "react-redux";
import * as characterActions from "../../../redux/actions/characterActions";
import * as projectActions from "../../../redux/actions/projectActions";
import { bindActionCreators } from "redux";
import Button from "../../common/button/button";
import { NavLink } from "react-router-dom";

const CharacterList = props => {
  useEffect(() => {
    props.actions.loadCharacters().catch(error => {});
    props.actions.loadProjects().catch(error => {});
  }, []);
  return (
    <React.Fragment>
      <h2>Characters</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.characters.map(character => (
            <tr>
              <td>{character.actorCharacterId}</td>
              <td>{character.firstName}</td>
              <td>{character.lastName}</td>
              <td>
                <Button>
                  <NavLink
                    to={{
                      pathname: "/characters/edit",
                      state: { id: character.actorCharacterId }
                    }}
                  >
                    Edit
                  </NavLink>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
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

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
