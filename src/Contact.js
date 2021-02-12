"use strict";
exports.__esModule = true;
exports.Contact = exports.getClassNames = void 0;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var merge_styles_1 = require("@uifabric/merge-styles");
var react_router_dom_1 = require("react-router-dom");
var email_png_1 = require("./assets/email.png");
var getClassNames = function () {
    return merge_styles_1.mergeStyleSets({
        title: {
            paddingLeft: 10,
            fontWeight: 800,
            fontSize: 30
        },
        secondaryBoxText: {
            paddingTop: 10
        },
        email: {
            maxWidth: '230px',
            marginTop: '10px'
        }
    });
};
exports.getClassNames = getClassNames;
var Contact = function () {
    var _a = exports.getClassNames(), title = _a.title, secondaryBoxText = _a.secondaryBoxText, email = _a.email;
    return (<>
      <react_northstar_1.Flex gap="gap.small" padding="padding.medium" column>
        <react_northstar_1.FlexItem push grow>
          <react_northstar_1.Text size="largest" content="Contact" className={title}/>
        </react_northstar_1.FlexItem>
        <react_northstar_1.Flex gap="gap.medium" padding="padding.medium" column>
          <react_northstar_1.Card aria-roledescription="card" elevated fluid>
            <react_northstar_1.Card.Header fitted>
              <react_northstar_1.Flex gap="gap.medium">
                <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faXing} size="4x"/>
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="My Xing Profile" weight="bold" size="large"/>
                  <react_router_dom_1.Link to={{
        pathname: 'https://www.xing.com/profile/Daniel_Main/cv'
    }} target="_blank">
                    <react_northstar_1.Text className={secondaryBoxText} color="brand" content="www.xing.com"/>
                  </react_router_dom_1.Link>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.Card.Header>
          </react_northstar_1.Card>
          <react_northstar_1.Card aria-roledescription="card" elevated fluid>
            <react_northstar_1.Card.Header fitted>
              <react_northstar_1.Flex gap="gap.medium">
                <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faGithub} size="4x"/>
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="My Github repositories" weight="bold" size="large"/>
                  <react_router_dom_1.Link to={{
        pathname: 'https://github.com/danielmain'
    }} target="_blank">
                    <react_northstar_1.Text className={secondaryBoxText} color="brand" content="www.github.com"/>
                  </react_router_dom_1.Link>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.Card.Header>
          </react_northstar_1.Card>
          <react_northstar_1.Card aria-roledescription="card" elevated fluid>
            <react_northstar_1.Card.Header fitted>
              <react_northstar_1.Flex gap="gap.medium">
                <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faAt} size="4x"/>
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Write me an E-Mail" weight="bold" size="large"/>
                  <react_northstar_1.Flex className={email} hAlign="start">
                    <react_northstar_1.Image src={email_png_1["default"]} fluid/>
                  </react_northstar_1.Flex>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.Card.Header>
          </react_northstar_1.Card>
          <react_northstar_1.Card aria-roledescription="card" elevated fluid>
            <react_northstar_1.Card.Header fitted>
              <react_northstar_1.Flex gap="gap.medium">
                <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faKeybase} size="4x"/>
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Find me in the secure chat Keybase" weight="bold" size="large"/>
                  <react_router_dom_1.Link to={{
        pathname: 'https://keybase.io/danielmain'
    }} target="_blank">
                    <react_northstar_1.Text className={secondaryBoxText} color="brand" content="www.keybase.io"/>
                  </react_router_dom_1.Link>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.Card.Header>
          </react_northstar_1.Card>
        </react_northstar_1.Flex>
      </react_northstar_1.Flex>
    </>);
};
exports.Contact = Contact;
