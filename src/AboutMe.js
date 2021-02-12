"use strict";
exports.__esModule = true;
exports.AboutMe = exports.getClassNames = void 0;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
var merge_styles_1 = require("@uifabric/merge-styles");
var getClassNames = function () {
    return merge_styles_1.mergeStyleSets({
        rootContainer: {},
        title: {
            paddingLeft: 10,
            fontWeight: 800,
            fontSize: 30
        },
        subtitle: {
            paddingRight: 10,
            fontStyle: 'italic'
        },
        serviceTitle: {
            paddingLeft: 10,
            fontWeight: 600,
            fontSize: 40
        },
        paragraph: {
            paddingRight: 10
        },
        secondaryBoxText: {
            paddingTop: 10
        },
        devIcon: {
            color: '#887cbe'
        },
        autoIcon: {
            color: '#887cbe'
        },
        meetIcon: {
            color: '#887cbe'
        },
        dbIcon: {
            color: '#887cbe'
        },
        image: {
            maxWidth: 90,
            maxHeight: 60
        }
    });
};
exports.getClassNames = getClassNames;
var AboutMe = function () {
    var _a = exports.getClassNames(), title = _a.title, subtitle = _a.subtitle, serviceTitle = _a.serviceTitle, paragraph = _a.paragraph, secondaryBoxText = _a.secondaryBoxText, devIcon = _a.devIcon, autoIcon = _a.autoIcon, meetIcon = _a.meetIcon, dbIcon = _a.dbIcon;
    return (<>
      <react_northstar_1.Flex gap="gap.small" padding="padding.medium" column>
        <react_northstar_1.FlexItem push grow>
          <react_northstar_1.Text size="largest" content="about me" className={title}/>
        </react_northstar_1.FlexItem>
        <react_northstar_1.FlexItem>
          <react_northstar_1.Segment>
            <react_northstar_1.Text size="medium" content="React Maximalist" className={subtitle} color="brand"/>
            <react_northstar_1.Text size="medium" content="/" className={subtitle}/>
            <react_northstar_1.Text size="medium" content="18 years as a developer" className={subtitle} color="brand"/>
            <react_northstar_1.Text size="medium" content="/" className={subtitle}/>
            <react_northstar_1.Text size="medium" content="Crypto Enthusiast" className={subtitle} color="brand"/>
          </react_northstar_1.Segment>
        </react_northstar_1.FlexItem>
        <react_northstar_1.FlexItem>
          <react_northstar_1.Segment>
            <react_northstar_1.Text size="medium" content="I have worked for the last 10 years in small and big scrum teams assuming the different roles like lead developer, scrum master and consultant." className={paragraph}/>
          </react_northstar_1.Segment>
        </react_northstar_1.FlexItem>
        <react_northstar_1.FlexItem>
          <react_northstar_1.Text size="largest" content="my services" className={serviceTitle}/>
        </react_northstar_1.FlexItem>
      </react_northstar_1.Flex>
      <react_northstar_1.Flex gap="gap.medium" padding="padding.medium" column>
        <react_northstar_1.Card aria-roledescription="card" elevated fluid>
          <react_northstar_1.Card.Header fitted>
            <react_northstar_1.Flex gap="gap.medium">
              <react_northstar_1.CompanionIcon size="large" className={devIcon}/>
              <react_northstar_1.Flex column>
                <react_northstar_1.Text content="Web and Mobile in React" weight="bold" size="large"/>
                <react_northstar_1.Text className={secondaryBoxText} color="brand" content="Building a custom tailored solution based on your technical specification. Pure Typescript without 'any'."/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.Card.Header>
        </react_northstar_1.Card>
        <react_northstar_1.Card aria-roledescription="card" elevated fluid>
          <react_northstar_1.Card.Header fitted>
            <react_northstar_1.Flex gap="gap.medium">
              <react_northstar_1.RobotIcon size="large" className={autoIcon}/>
              <react_northstar_1.Flex column>
                <react_northstar_1.Text content="Automated testing" weight="bold" size="large"/>
                <react_northstar_1.Text className={secondaryBoxText} color="brand" content="Helping you to reach a higher test-coverage using unit-test and end-to-end tests based on Jest and Appium."/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.Card.Header>
        </react_northstar_1.Card>
        <react_northstar_1.Card aria-roledescription="card" elevated fluid>
          <react_northstar_1.Card.Header fitted>
            <react_northstar_1.Flex gap="gap.medium">
              <react_northstar_1.PresenterIcon size="large" className={meetIcon}/>
              <react_northstar_1.Flex column>
                <react_northstar_1.Text content="Remote workshops" weight="bold" size="large"/>
                <react_northstar_1.Text className={secondaryBoxText} color="brand" content="I can prepare your team to be ready to start coding with react. The workshop can be done in three different languages: English/German/Spanish"/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.Card.Header>
        </react_northstar_1.Card>
        <react_northstar_1.Card aria-roledescription="card" elevated fluid>
          <react_northstar_1.Card.Header fitted>
            <react_northstar_1.Flex gap="gap.medium">
              <react_northstar_1.TableIcon size="large" className={dbIcon}/>
              <react_northstar_1.Flex column>
                <react_northstar_1.Text content="Databases" weight="bold" size="large"/>
                <react_northstar_1.Text className={secondaryBoxText} color="brand" content="Vast experience with SQL databases like Oracle and MySQL. But if relations and consistency is not the key a document based db ist for you."/>
              </react_northstar_1.Flex>
            </react_northstar_1.Flex>
          </react_northstar_1.Card.Header>
        </react_northstar_1.Card>
      </react_northstar_1.Flex>
    </>);
};
exports.AboutMe = AboutMe;
