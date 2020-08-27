import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../loading";

const getLoadable = ({ loader }) => Loadable({ loader, loading: Loading });

const renderRoute = (RouteComponent, routeDefinition, index) => (
  <RouteComponent
    key={`menuroute_${index}`}
    exact={routeDefinition.exact}
    path={routeDefinition.path}
    component={getLoadable(routeDefinition)}
  />
);

const renderRouteFrom = (routeDefinition, index) =>
  renderRoute(Route, routeDefinition, index);

const renderRoutes = ({ routeDefinitions }) =>
  routeDefinitions.map(renderRouteFrom);

const Router = (props: Props) => (
  <BrowserRouter>
    <Switch>{renderRoutes(props)}</Switch>
  </BrowserRouter>
);

export default Router;
