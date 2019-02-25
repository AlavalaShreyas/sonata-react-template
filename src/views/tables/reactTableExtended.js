import React, { Component, Fragment } from "react";

import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Alert, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import ReactTreeTableExample from "./examples/reactTreeTable";
import ReactSelectTableExample from "./examples/reactSelectTable";
import ReactFoldableTableExample from "./examples/reactFoldableTable";


//Table exmple souece pages
import ReactTreeTableSource from "./example-source/reactTreeTable";
import ReactSelectTableSource from "./example-source/reactSelectTable";
import ReactFoldableTableSource from "./example-source/reactFoldableTable";

class reactTableExtended extends Component {
   render() {
      return (
         <Fragment>
            

                
            {/* <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>React Tree Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactTreeTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactTreeTableSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row> */}
            <Row className="row-eq-height">
               <Col sm="12">
                     <Card>
                        <CardBody>
                           <CardTitle>React Table Design</CardTitle>
                           
                           <Col md="12" lg="6" className="leftDiv">
                              <ReactSelectTableExample />
                              <div className="">
                                 <div className="installation">Installation</div>
                           
                                 <Col md="12" className="leftDiv">
                                    <div className="installation-steps">
                                       <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                       <div className="installation-box">
                                          <div>npm install react-table</div>
                                          <div>npm install chance</div>
                                       </div>
                                    </div>
                                 </Col>
                              </div>
                           </Col>
                           <Col md="12" lg="6" className="rightDiv">
                                 <CopyToClipboard text={ReactSelectTableSource}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-code">Copy Code</span>
                                 </CopyToClipboard>
                                 <PrismCode
                                    component="pre"
                                    className="language-javascript"
                                 >
                                    {ReactSelectTableSource}
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
                        <CardTitle>Selected Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactSelectTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactSelectTableSource}
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
                        <CardTitle>Foldable Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactFoldableTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactFoldableTableSource}
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

export default reactTableExtended;
