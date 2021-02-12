"use strict";
exports.__esModule = true;
exports.Imprint = exports.getClassNames = void 0;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
var merge_styles_1 = require("@uifabric/merge-styles");
var tel_png_1 = require("./assets/tel.png");
var getClassNames = function () {
    return merge_styles_1.mergeStyleSets({
        title: {
            paddingLeft: 10,
            fontWeight: 800,
            fontSize: 30
        },
        tel: {
            maxWidth: '230px',
            marginTop: '10px'
        }
    });
};
exports.getClassNames = getClassNames;
var Imprint = function () {
    var _a = exports.getClassNames(), title = _a.title, tel = _a.tel;
    return (<>
      <react_northstar_1.Flex gap="gap.small" padding="padding.medium" column>
        <react_northstar_1.FlexItem push grow>
          <react_northstar_1.Text size="largest" content="Imprint" className={title}/>
        </react_northstar_1.FlexItem>
        <react_northstar_1.Segment>
          <react_northstar_1.Card elevated fluid>
            <react_northstar_1.CardHeader>
              <react_northstar_1.Flex gap="gap.small">
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Die Vorgaben von § 5 TMG sind durch die folgenden Angaben erfüllt:" weight="bold"/>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.CardHeader>
            <react_northstar_1.CardBody>
              <react_northstar_1.Flex gap="gap.small">
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Daniel Main"/>
                  <react_northstar_1.Text content="Zuckerleweg 46 70374 Stuttgart"/>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.CardBody>
          </react_northstar_1.Card>
        </react_northstar_1.Segment>
        <react_northstar_1.Segment>
          <react_northstar_1.Card elevated fluid>
            <react_northstar_1.CardHeader>
              <react_northstar_1.Flex gap="gap.small">
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Die Umsatzsteuer-Identifikation lautet:" weight="bold"/>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.CardHeader>
            <react_northstar_1.CardBody>DE278408110</react_northstar_1.CardBody>
          </react_northstar_1.Card>
        </react_northstar_1.Segment>
        <react_northstar_1.Segment>
          <react_northstar_1.Card elevated fluid>
            <react_northstar_1.CardHeader>
              <react_northstar_1.Flex gap="gap.small">
                <react_northstar_1.Flex column>
                  <react_northstar_1.Text content="Kontakt:" weight="bold"/>
                </react_northstar_1.Flex>
              </react_northstar_1.Flex>
            </react_northstar_1.CardHeader>
            <react_northstar_1.CardBody>
              <react_northstar_1.Flex className={tel} hAlign="start">
                <react_northstar_1.Image src={tel_png_1["default"]} fluid/>
              </react_northstar_1.Flex>
            </react_northstar_1.CardBody>
          </react_northstar_1.Card>
        </react_northstar_1.Segment>
      </react_northstar_1.Flex>
    </>);
};
exports.Imprint = Imprint;
