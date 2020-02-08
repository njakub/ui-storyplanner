import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./home/homePage";
import PageNotFound from "./PageNotFound";
import AppShell from "./appShell/appShell";
import CharacterEdit from "./character/characterEdit/characterEdit";
import CharacterAdd from "./character/characterAdd/characterAdd";
import CharacterViewAll from "./character/characterViewAll/characterViewAll";
import ProjectAdd from "./project/projectAdd/projectAdd";
import ProjectViewAll from "./project/projectViewAll/projectViewAll";
import ProjectView from "./project/projectView/projectView";
import "./App.scss";

function App() {
  return (
    <AppShell>
      <div className="container-fluid App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/characters/view" component={CharacterViewAll} />
          <Route exact path="/characters/add" component={CharacterAdd} />
          <Route exact path="/characters/edit" component={CharacterEdit} />
          <Route exact path="/projects/add" component={ProjectAdd} />
          <Route exact path="/projects/view-all" component={ProjectViewAll} />
          <Route exact path="/projects/view" component={ProjectView} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </AppShell>
  );
}

export default App;
