import React from "react";
import "./sideBar.scss";
import { NavLink, IndexLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  listGroupItem: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "none",
    color: "white",
    borderRadius: "5px",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white",
      borderRadius: "5px"
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white",
      borderRadius: "5px"
    }
  },
  activeLink: {
    backgroundColor: "#00acc1",
    borderRadius: "5px",
    color: "white",
    // boxShadow: "4px 4px 5px 0px #00acc1",
    "&:hover": {
      backgroundColor: "#00acc1",
      color: "white",
      borderRadius: "5px"
    }
  },
  seperator: {
    borderTop: "1px solid #606669"
  },
  hidden: {
    visibility: "hidden",
    borderTop: "1px solid #606669"
  },
  show: {
    visibility: "show",
    borderTop: "1px solid #606669"
  }
}));

const SideBar = ({ showProjectMenu, loadedProjectName }) => {
  const classes = useStyles();

  const [openCharacters, setOpenCharacters] = React.useState(false);
  const [openProjects, setOpenProjects] = React.useState(false);

  function ListItemLink(props) {
    return (
      <ListItem
        button
        component={NavLink}
        {...props}
        activeClassName={classes.activeLink}
      />
    );
  }
  const handleClickCharacters = () => {
    setOpenCharacters(!openCharacters);
  };

  const handleClickProjects = () => {
    setOpenProjects(!openProjects);
  };

  return (
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-heading">
          {" "}
          <svg
            height="50pt"
            viewBox="0 -40 448 448"
            width="50pt"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0" />
            <path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0" />
            <path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0" />
            <path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0" />
          </svg>
          <div>TaleMate</div>
        </div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemLink exact className={classes.listGroupItem} to="/">
            <ListItemText primary="Dashboard" />
          </ListItemLink>
          <ListItem button onClick={handleClickCharacters}>
            <ListItemText primary="Characters" />
            {openCharacters ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCharacters} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink className={classes.nested} to="/characters/view">
                <ListItemText primary="View Characters" />
              </ListItemLink>
              <ListItemLink className={classes.nested} to="/characters/add">
                <ListItemText primary="Add Character" />
              </ListItemLink>
            </List>
          </Collapse>
          <ListItem button onClick={handleClickProjects}>
            <ListItemText primary="Projects" />
            {openProjects ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openProjects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink className={classes.nested} to="/projects/view-all">
                <ListItemText primary="View Projects" />
              </ListItemLink>
              <ListItemLink className={classes.nested} to="/projects/add">
                <ListItemText primary="Add Project" />
              </ListItemLink>
            </List>
          </Collapse>
        </List>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={showProjectMenu ? classes.show : classes.hidden}
        >
          <ListItemLink
            exact
            className={classes.listGroupItem}
            to="/projects/view"
          >
            <ListItemText primary={loadedProjectName} />
          </ListItemLink>
        </List>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showProjectMenu: state.projects.showProjectMenu,
    loadedProjectName: state.projects.loadedProject.storyProjectName
  };
};

export default connect(mapStateToProps)(SideBar);
