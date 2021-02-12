"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var App = function () {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route path="/:page?" component={Home_1.Home}/>
      </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>);
};
exports["default"] = App;
