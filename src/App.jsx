import React from "react";

import Router from "./components/router";

import routeDefinitions from "./routeDefinitions";

const App = () => <Router {...{ routeDefinitions }} />;

export default App;
