"use strict";
exports.__esModule = true;
exports.Portfolio = exports.getClassNames = void 0;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
var merge_styles_1 = require("@uifabric/merge-styles");
var phplogo_png_1 = require("./assets/phplogo.png");
var clogo_jpg_1 = require("./assets/clogo.jpg");
var javalogo_png_1 = require("./assets/javalogo.png");
var reactlogo_png_1 = require("./assets/reactlogo.png");
var getClassNames = function () {
    return merge_styles_1.mergeStyleSets({
        title: {
            paddingLeft: 10,
            fontWeight: 800,
            fontSize: 30
        },
        paragraph: {
            paddingRight: 10
        }
    });
};
exports.getClassNames = getClassNames;
var items = [
    {
        key: 'php',
        media: <react_northstar_1.Image src={phplogo_png_1["default"]} avatar/>,
        header: '3 Years coding in PHP'
    },
    {
        key: 'c',
        media: <react_northstar_1.Image src={clogo_jpg_1["default"]} avatar/>,
        header: '2 Years writing almost bare metal c++'
    },
    {
        key: 'java',
        media: <react_northstar_1.Image src={javalogo_png_1["default"]} avatar/>,
        header: '6 Years in the dark era of object oriented in java'
    },
    {
        key: 'react',
        media: <react_northstar_1.Image src={reactlogo_png_1["default"]} avatar/>,
        header: '7 Years discovering how to write simple code in React and React Native'
    },
];
var Portfolio = function () {
    var _a = exports.getClassNames(), title = _a.title, paragraph = _a.paragraph;
    return (<>
      <react_northstar_1.Flex gap="gap.medium" padding="padding.medium" column>
        <react_northstar_1.FlexItem push grow>
          <react_northstar_1.Text size="largest" content="Portfolio" className={title}/>
        </react_northstar_1.FlexItem>
        <react_northstar_1.Segment>
          <react_northstar_1.Text size="medium" content="Having a long journey as a software developer since the year 2002, starting with:" className={paragraph}/>
        </react_northstar_1.Segment>
        <react_northstar_1.Card aria-roledescription="card" size="largest" elevated fluid>
          <react_northstar_1.CardHeader>
            <react_northstar_1.Flex gap="gap.small">
              <react_northstar_1.Avatar image={reactlogo_png_1["default"]}/>
              <react_northstar_1.Flex column>
                <react_northstar_1.Text size="largest" content="ReactJs and React-Native" weight="bold" color="brand"/>
                <react_northstar_1.Text content="Mobile and Web development in Javascript" size="small"/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.CardHeader>
          <react_northstar_1.CardBody>
            Seven years writing code in Javascript and the last four years
            writing ReactJS and React Native components
          </react_northstar_1.CardBody>
        </react_northstar_1.Card>
        <react_northstar_1.Card aria-roledescription="card" size="largest" elevated fluid>
          <react_northstar_1.CardHeader>
            <react_northstar_1.Flex gap="gap.small">
              <react_northstar_1.Flex column>
                <react_northstar_1.Text content="Old technologies" weight="bold"/>
                <react_northstar_1.Text content="Worked many years but not interested to touch again" size="small"/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.CardHeader>
          <react_northstar_1.CardBody>
            <react_northstar_1.List items={items}/>
          </react_northstar_1.CardBody>
        </react_northstar_1.Card>
        <react_northstar_1.Segment>
          <react_northstar_1.Text size="medium" content="That is why I feel confident to help and assist you with any Web or Mobile Development related project" className={paragraph}/>
        </react_northstar_1.Segment>
      </react_northstar_1.Flex>
    </>);
};
exports.Portfolio = Portfolio;
