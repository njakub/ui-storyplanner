import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import AppShell from "./appShell/AppShell";
import "./App.scss";

function App() {
  return (
    <AppShell>
      <div className="container-fluid App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </AppShell>
  );
}

export default App;
