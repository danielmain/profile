"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("sanitize.css/sanitize.css");
var react_northstar_1 = require("@fluentui/react-northstar");
var App_1 = require("./App");
react_dom_1["default"].render(<react_northstar_1.Provider theme={react_northstar_1.teamsDarkTheme}>
    <App_1["default"] />
  </react_northstar_1.Provider>, document.getElementById('root'));
