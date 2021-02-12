"use strict";
exports.__esModule = true;
exports.Home = exports.getClassNames = void 0;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
var merge_styles_1 = require("@uifabric/merge-styles");
var profile_jpg_1 = require("./assets/profile.jpg");
var Navigation_1 = require("./Navigation");
var AboutMe_1 = require("./AboutMe");
var Imprint_1 = require("./Imprint");
var Contact_1 = require("./Contact");
var Portfolio_1 = require("./Portfolio");
var getClassNames = function () {
    return merge_styles_1.mergeStyleSets({
        rootContainer: {
            height: '100vh !important',
            backgroundColor: 'black',
            paddingLeft: '2vh',
            paddingRight: '2vh'
        },
        menuContainer: {
            marginTop: 30,
            marginBottom: 30
        },
        contentContainer: {
            marginTop: 30,
            marginBottom: 30,
            overflowY: 'auto'
        },
        image: {
            maxWidth: '30%',
            minWidth: '22vh',
            height: '100vh',
            objectFit: 'cover'
        }
    });
};
exports.getClassNames = getClassNames;
var HomeDesktop = function (_a) {
    var match = _a.match;
    var _b = exports.getClassNames(), rootContainer = _b.rootContainer, menuContainer = _b.menuContainer, image = _b.image, contentContainer = _b.contentContainer;
    var _c = react_1["default"].useState(), content = _c[0], setContent = _c[1];
    react_1["default"].useEffect(function () {
        var _a;
        switch ((_a = match.params) === null || _a === void 0 ? void 0 : _a.page) {
            case 'about':
                setContent(<AboutMe_1.AboutMe />);
                break;
            case 'contact':
                setContent(<Contact_1.Contact />);
                break;
            case 'portfolio':
                setContent(<Portfolio_1.Portfolio />);
                break;
            case 'imprint':
                setContent(<Imprint_1.Imprint />);
                break;
            default:
                setContent(<AboutMe_1.AboutMe />);
                break;
        }
    }, [match.params]);
    return (<react_northstar_1.Flex fill className={rootContainer}>
      <react_northstar_1.FlexItem>
        <react_northstar_1.Segment className={menuContainer}>
          <Navigation_1.Navigation />
        </react_northstar_1.Segment>
      </react_northstar_1.FlexItem>
      <react_northstar_1.FlexItem grow>
        <react_northstar_1.Image className={image} src={profile_jpg_1["default"]}/>
      </react_northstar_1.FlexItem>
      <react_northstar_1.FlexItem push grow>
        <react_northstar_1.Segment className={contentContainer}>{content}</react_northstar_1.Segment>
      </react_northstar_1.FlexItem>
    </react_northstar_1.Flex>);
};
exports.Home = HomeDesktop;
