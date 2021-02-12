"use strict";
exports.__esModule = true;
exports.Navigation = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_northstar_1 = require("@fluentui/react-northstar");
var Navigation = function () {
    return (<react_northstar_1.Flex fill column>
      <react_northstar_1.FlexItem grow>
        <react_northstar_1.Segment>
          <react_northstar_1.Button icon={<react_northstar_1.MenuIcon size="large"/>} primary/>
        </react_northstar_1.Segment>
      </react_northstar_1.FlexItem>
      <react_northstar_1.Segment>
        <react_router_dom_1.Link to="/about">
          <react_northstar_1.Button fluid size="largest" content="about me"/>
        </react_router_dom_1.Link>
      </react_northstar_1.Segment>
      <react_northstar_1.Segment>
        <react_router_dom_1.Link to="/contact">
          <react_northstar_1.Button fluid size="largest" content="contact"/>
        </react_router_dom_1.Link>
      </react_northstar_1.Segment>
      <react_northstar_1.Segment>
        <react_router_dom_1.Link to="/public/cv.pdf" target="_blank" download>
          <react_northstar_1.Button fluid size="largest" content="resume"/>
        </react_router_dom_1.Link>
      </react_northstar_1.Segment>
      <react_northstar_1.Segment>
        <react_router_dom_1.Link to="/portfolio">
          <react_northstar_1.Button fluid size="largest" content="portfolio"/>
        </react_router_dom_1.Link>
      </react_northstar_1.Segment>
      <react_northstar_1.Segment>
        <react_router_dom_1.Link to="/imprint">
          <react_northstar_1.Button fluid size="largest" content="imprint"/>
        </react_router_dom_1.Link>
      </react_northstar_1.Segment>
    </react_northstar_1.Flex>);
};
exports.Navigation = Navigation;
