import React from "react";

import routeDefinitions from "./routeDefinitions";
import Router from "./components/router";
import Navbar from "./components/navbar/";

const renderNavbar = () => <Navbar />;

const App = () => (
  <React.Fragment>
    {renderNavbar()}
    <Router {...{ routeDefinitions }} />
  </React.Fragment>
);

export default App;
