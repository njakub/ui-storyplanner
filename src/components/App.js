import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import AppShell from "./appShell/AppShell";
import CharacterPage from "./courses/CharacterPage";
import CharacterAddPage from "./courses/CharacterCreate";
import InvoicePage from "./invoice/Invoice";
import "./App.scss";

function App() {
  return (
    <AppShell>
      <div className="container-fluid App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/characters/view" component={CharacterPage} />
          <Route path="/characters/add" component={CharacterAddPage} />
          <Route path="/invoice" component={InvoicePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </AppShell>
  );
}

export default App;
