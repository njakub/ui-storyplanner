import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActions from "../../../redux/actions/projectActions";
import Table from "../../common/table/table";
import Button from "../../common/button/button";
import { NavLink } from "react-router-dom";

const ProjectView = ({ actions, location, loadedProject }) => {
  useEffect(() => {
    if (location.state && location.state.id) {
      actions.loadProject(location.state.id);
    }
  }, []);

  return (
    <React.Fragment>
      <h1>{loadedProject.storyProjectName}</h1>
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
          {loadedProject.actorCharacters &&
            loadedProject.actorCharacters.map(character => (
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
    loadedProject: state.projects.loadedProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadProject: bindActionCreators(projectActions.loadProject, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
