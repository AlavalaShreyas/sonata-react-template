import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Tooltip, Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { UncontrolledTooltip } from "reactstrap";

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import {TooltipMulti} from 'react-sonata-components-library'
import {TooltipUncontrolled} from 'react-sonata-components-library'

// Import Example Source Code
import TooltipsDefaultSource from "./exampleSource/tooltips";
import TooltipsUncontrolledSource from "./exampleSource/tooltipsUncontrolled";

class TooltipExampleMulti extends React.Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Tooltips</ContentHeader>
            <ContentSubHeader>Tooltip React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                     <LiveProvider
                        code={TooltipsDefaultSource}
                        scope={{
                           TooltipMulti, Tooltip, Button
                        }}
                     >
                        <CardTitle>Tooltips</CardTitle>
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError />
                           <LivePreview />
                           <div className="">
                           <div className="installation">Installation</div>
                           <Col md="12" className="leftDiv">
                              <div className="installation-steps">
                              <div className="installation-text">
                                 Download and install the package. Use Node.js v8.0.0
                                 or later.
                              </div>
                              <div className="installation-box">
                                 npm install --save react-sonata-components-library
                              </div>
                              <div className="installation-box">
                                 import {"{ TooltipMulti }"} from
                                 "react-sonata-components-library";
                              </div>
                              </div>
                           </Col>
                        </div>
                     </Col>
                        <Col md="12" lg="6" className="rightDiv">
                        <CopyToClipboard text={TooltipsDefaultSource}
                           onCopy={() => this.setState({copied: true})}>
                           <span className="copy-code">Copy Code</span>
                        </CopyToClipboard>
                        {/* <PrismCode
                           component="pre"
                           className="language-javascript"
                        >
                           {MediaObjectSource}
                        </PrismCode> */}
                        <LiveEditor style={{ background: "#272822" }} />
                     </Col>
                          </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                     <LiveProvider
                        code={TooltipsUncontrolledSource}
                        scope={{
                           TooltipUncontrolled, UncontrolledTooltip 
                        }}
                     >
                        <CardTitle>UncontrolledTooltip</CardTitle>
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError />
                           <LivePreview />
                           <div className="">
                           <div className="installation">Installation</div>
                           <Col md="12" className="leftDiv">
                              <div className="installation-steps">
                              <div className="installation-text">
                                 Download and install the package. Use Node.js v8.0.0
                                 or later.
                              </div>
                              <div className="installation-box">
                                 npm install --save react-sonata-components-library
                              </div>
                              <div className="installation-box">
                                 import {"{ TooltipUncontrolled }"} from
                                 "react-sonata-components-library";
                              </div>
                              </div>
                           </Col>
                        </div>
                     </Col>
                        <Col md="12" lg="6" className="rightDiv">
                        <CopyToClipboard text={TooltipsUncontrolledSource}
                           onCopy={() => this.setState({copied: true})}>
                           <span className="copy-code">Copy Code</span>
                        </CopyToClipboard>
                        {/* <PrismCode
                           component="pre"
                           className="language-javascript"
                        >
                           {MediaObjectSource}
                        </PrismCode> */}
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

export default TooltipExampleMulti;
