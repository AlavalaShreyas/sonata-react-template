import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "../../../assets/scss/views/components/extra/upload.scss";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import ToastrTypes from "./examples/toastrTypes";
import ToastrPositions from "./examples/toastrPositions";
import ToastrTransitions from "./examples/toastrTransitions";

// Import Example Source Code
import ToastrTypesSource from "./exampleSource/toastrTypes";
import ToastrPositionsSource from "./exampleSource/toastrPositions";
import ToastrTransitionsSource from "./exampleSource/toastrTransitions";

class Toastr extends Component {

   render() {
      return (
         <Fragment>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Positions</CardTitle>
                        <Col md="12" lg="6" className="leftDiv">
                           <ToastrPositions />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save reactstrap react react-dom
                                       <br/>
                                       npm install react-redux-toastr
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ToastrPositionsSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ToastrPositionsSource}
                           </PrismCode>
                           
                        </Col>
                        
                     </CardBody>
                  </Card>
               </Col>               
            </Row>
            {/* <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Types</CardTitle>
                        <p>
                           Types of Toastr
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrTypes />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrTypesSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Positions</CardTitle>
                        <p>
                            Available positions
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrPositions />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrPositionsSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Transitions</CardTitle>
                        <p>
                            Available transitions
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrTransitions />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrTransitionsSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row> */}
         </Fragment>
      );
   }
}

export default Toastr;
