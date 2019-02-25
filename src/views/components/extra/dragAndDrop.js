import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import VerticalList from "./examples/dndVerticalList";
import HorizontalList from "./examples/dndHorizontalList";
import MultipleTarget from "./examples/dndMultipleTarget";

// Import Example Source Code
import VerticalListSource from "./exampleSource/dndVerticalList";
import HorizontalListSource from "./exampleSource/dndHorizontalList";
import MultipleTargetSource from "./exampleSource/dndMultipleTarget";

class DragAndDrop extends Component {
   render() {
      return (
         <Fragment>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Multiple Drop Targets</CardTitle>
                        <Col md="12" lg="6" className="leftDiv">
                           <MultipleTarget />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save reactstrap react react-dom
                                       <br/>
                                       npm install react-beautiful-dnd
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={MultipleTargetSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MultipleTargetSource}
                           </PrismCode>
                           
                        </Col>
                        
                     </CardBody>
                  </Card>
               </Col>               
            </Row>
            {/* <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Vertical List</CardTitle>
                        <CustomTabs
                           TabContent1={<VerticalList />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {VerticalListSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Horizontal List</CardTitle>
                        <CustomTabs
                           TabContent1={<HorizontalList />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {HorizontalListSource}
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
                        <CardTitle>Multiple Drop Targets</CardTitle>
                        <CustomTabs
                           TabContent1={<MultipleTarget />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {MultipleTargetSource}
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

export default DragAndDrop;
