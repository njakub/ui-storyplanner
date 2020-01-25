import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActions from "../../redux/actions/projectActions";
import Table from "../common/Table/Table";

const StoryProjectViewAll = props => {
  useEffect(() => {
    props.actions.loadProjects().catch(error => {
      alert("Loading Projects Failed: " + error);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>Story Project List</h1>
      <Table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Characters</th>
          </tr>
        </thead>
        <tbody>
          {props.projects.map(project => (
            <tr>
              <td>{project.storyProjectName}</td>
              <td>{project.actorCharacters[0].firstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryProjectViewAll);
