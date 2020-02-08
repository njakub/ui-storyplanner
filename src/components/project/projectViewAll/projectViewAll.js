import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActions from "../../../redux/actions/projectActions";
import Table from "../../common/table/table";
import Button from "../../common/button/button";
import { NavLink } from "react-router-dom";

const ProjectViewAll = ({ actions, projects }) => {
  useEffect(() => {
    actions.loadProjects().catch(error => {});
  }, []);

  return (
    <React.Fragment>
      <h1>Story Project List</h1>
      <Table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr>
              <td>{project.storyProjectName}</td>
              <td>
                <Button>
                  <NavLink
                    to={{
                      pathname: "/projects/view",
                      state: { id: project.storyProjectId }
                    }}
                  >
                    View
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
    projects: state.projects.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectViewAll);
