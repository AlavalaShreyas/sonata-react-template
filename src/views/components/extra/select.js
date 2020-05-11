import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
// eslint-disable-next-line
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { SingleSelect,MultiSelect } from 'react-sonata-components-library';
// Import Example Source Code
import SelectSingleSource from "./exampleSource/selectSingle";
import SelectMultiSource from "./exampleSource/selectMulti";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Select from "react-select";


class Selects extends Component {
   render() {
      return (
         <Fragment>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                  <CardBody>
                        <CardTitle>Select Single</CardTitle>
						<LiveProvider 
						  code={SelectSingleSource}
					      scope={{SingleSelect,Select}}
                        >
                        <Col md="12" lg="6" className="leftDiv">
                          <LivePreview />
							  <LiveError />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm i react-sonata-components-library
                                    <br/>
                                     import {"{ SingleSelect }"}  from 'react-sonata-components-library'
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={SelectSingleSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                          <div style={{backgroundColor : '#000000'}}>
                                 <LiveEditor />
                            </div>  
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>               
            </Row>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Multi Select</CardTitle>
                        <LiveProvider 
						  code={SelectMultiSource}
					      scope={{MultiSelect,Select}}
                        >
                        <Col md="12" lg="6" className="leftDiv">
                        <LivePreview />
							  <LiveError />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm i react-sonata-components-library
                                       <br/>
                                       import {"{ MultiSelect }"} from 'react-sonata-components-library'
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={SelectMultiSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <div style={{backgroundColor : '#000000'}}>
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

export default Selects;