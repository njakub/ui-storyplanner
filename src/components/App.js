import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import AppShell from "./appShell/AppShell";
import CharacterEdit from "./character/characterEdit/CharacterEdit";
import CharacterAdd from "./character/characterAdd/CharacterAdd";
import CharacterViewAll from "./character/characterViewAll/CharacterViewAll";
import Projects from "./project/projectAdd/ProjectAdd";
import "./App.scss";

function App() {
  return (
    <AppShell>
      <div className="container-fluid App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/characters/view" component={CharacterViewAll} />
          <Route exact path="/characters/add" component={CharacterAdd} />
          <Route exact path="/characters/edit" component={CharacterEdit} />
          <Route exact path="/projects" component={Projects} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </AppShell>
  );
}

export default App;
