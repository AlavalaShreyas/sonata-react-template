import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TabsExampleSource from "./exampleSource/tabs";
import TabsExample from "./examples/tabs";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Tabs as Tabss,
  TabsContent,
  TabsBody,
} from "react-sonata-components-library";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const code = TabsExampleSource;
const scope = {
  TabsExample,
  NavItem,
  NavLink,
  Nav,
  classnames,
  TabContent,
  TabPane,
  Tabss,
  TabsContent,
  TabsBody,
};

class Tabs extends React.Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardBody>
                <CardTitle>Tabs</CardTitle>
                <LiveProvider code={code} scope={scope} noInline={false}>
                  <Col md="12" lg="6" className="leftDiv">
                    {/* <TabsExample /> */}
                    <LivePreview />
                    <LiveError />
                    <div className="installation-steps">
                                 <div className="installation-box">npm  install react-sonata-components-library</div>
                                 <div className="installation-box">import Tabs, TabsBody from 'react-sonata-components-library'</div>
                              </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <span className="copy-code">Edit Code</span>
                    <div style={{ backgroundColor: "#0E0E0E",color:"#1EDCD3" }}>
                      <LiveEditor />
                    </div>
                  </Col>
                </LiveProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Tabs;
