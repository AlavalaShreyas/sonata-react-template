import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component
import {CopyToClipboard} from 'react-copy-to-clipboard';

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import CollapseDefault from "./examples/collapse";
import CollapseUncontrolled from "./examples/collapseUncontrolled";

// Import Example Source Code
import CollapseDefaultSource from "./exampleSource/collapse";
import CollapseUncontrolledSource from "./exampleSource/collapseUncontrolled";

import { CollapseComponent } from "react-sonata-components-library";
import { UncontrolledCollapseComponent } from "react-sonata-components-library";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class Collapse extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Collapse</ContentHeader>
            <ContentSubHeader>Collapse React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <LiveProvider
                        code={CollapseUncontrolledSource}
                        scope={{UncontrolledCollapseComponent}}
                        >
                        <CardTitle>UncontrolleCollapse Component Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                        <LiveError />
                        <LivePreview />
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ UncontrolledCollapseComponent }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={CollapseUncontrolledSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <LiveEditor style={{ background: "#272822" }} />
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12">
                  <Card>
                     <CardBody>
                        <LiveProvider
                        code={CollapseDefaultSource}
                        scope={{CollapseComponent}}
                        >
                        <CardTitle>Collapse Component Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                        <LiveError />
                        <LivePreview />
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ CollapseComponent }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={CollapseDefaultSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <LiveEditor style={{ background: "#272822" }} />
                           
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

export default Collapse;
