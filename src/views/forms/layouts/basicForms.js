import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form, CustomInput, FormGroup, Label, Input } from "reactstrap";
import {
   X,
   CheckSquare,
   User,
   Briefcase,
   MessageSquare,
   Clock,
   File,
   Info,
   FileText,
   Mail,
   AlertTriangle
} from "react-feather";

import {CopyToClipboard} from 'react-copy-to-clipboard';

import BasicFormExampleSource from "../example-source/basicforms";
import issuetrack from "../example-source/issuetract";
//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";


class BasicForms extends Component {
   render() {
      return (
         <Fragment>
            <Row className="row-eq-height">
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Form Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <div className="px-3">
                              <Form>
                                 <div className="form-body">
                                    <h4 className="form-section"><User size={20} color="#212529" /> Personal Info</h4>
                                    <Row>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput1">First Name</Label>
                                             <Input type="text" id="projectinput1"   name="fname" />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput2">Last Name</Label>
                                             <Input type="text" id="projectinput2"   name="lname" />
                                          </FormGroup>
                                       </Col>
                                    </Row>
                                    <Row>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput3">E-mail</Label>
                                             <Input type="text" id="projectinput3"   name="email"/>
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput4">Contact Number</Label>
                                             <Input type="text" id="projectinput4"   name="phone"/>
                                          </FormGroup>
                                       </Col>
                                    </Row>

                                    <h4 className="form-section"><FileText size={20} color="#212529" /> Requirements</h4>

                                    <FormGroup>
                                       <Label for="companyName">Company</Label>
                                       <Input type="text" id="companyName"   name="company"/>
                                    </FormGroup>

                                    <Row>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput5">Interested in</Label>
                                             <Input type="select" id="projectinput5" name="interested" >
                                                <option value="none" defaultValue="" disabled="">Interested in</option>
                                                <option value="design">design</option>
                                                <option value="development">development</option>
                                                <option value="illustration">illustration</option>
                                                <option value="branding">branding</option>
                                                <option value="video">video</option>
                                             </Input>
                                          </FormGroup>
                                       </Col>

                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="projectinput6">Budget</Label>
                                             <Input type="select" id="projectinput6" name="budget" >
                                                <option value="0" defaultValue="" disabled="">Budget</option>
                                                <option value="less than 5000$">less than 5000$</option>
                                                <option value="5000$ - 10000$">5000$ - 10000$</option>
                                                <option value="10000$ - 20000$">10000$ - 20000$</option>
                                                <option value="more than 20000$">more than 20000$</option>
                                             </Input>
                                          </FormGroup>
                                       </Col>
                                    </Row>

                                    <FormGroup>
                                       <Label>Select File</Label>
                                       <Input type="file" className="form-control-file" id="projectinput8"/>
                                    </FormGroup>

                                    <FormGroup>
                                       <Label for="projectinput8">About Project</Label>
                                       <Input type="textarea" id="projectinput8" rows="5"  name="comment" />
                                    </FormGroup>
                                 </div>

                                 <div className="form-actions">
                                    <Button color="warning" className="mr-1">
                                       <X size={16} color="#FFF" /> Cancel
                                    </Button>
                                    <Button color="primary">
                                       <CheckSquare size={16} color="#FFF" /> Save
                                    </Button>
                                 </div>
                              </Form>
                           </div>
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save reactstrap react react-dom</div>
                                 </div>
                              </Col>
                           </div>
                           

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                            <CopyToClipboard text={BasicFormExampleSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {BasicFormExampleSource}
                              </PrismCode> 
                              
                        </Col>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
           


            <Row className="row-eq-height">
            <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Issue Tracking Form Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <div className="px-3">
                              <Form>
                                 <div className="form-body">
                                    <FormGroup>
                                       <Label for="issueinput1">Issue Title</Label>
                                       <div className="position-relative has-icon-right">
                                          <Input type="text" id="issueinput1"   name="issuetitle" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Issue Title" />
                                          <div className="form-control-position">
                                             <AlertTriangle size={16} color="#212529" />
                                          </div>
                                       </div>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="issueinput2">Opened By</Label>
                                       <div className="position-relative has-icon-right">
                                          <Input type="text" id="issueinput2"   name="openedby" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Opened By" />
                                          <div className="form-control-position">
                                             <User size={16} color="#212529" />
                                          </div>
                                       </div>
                                    </FormGroup>
                                    <Row>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="issueinput3">Date Opened</Label>
                                             <Input type="date" id="issueinput3"  name="dateopened" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Opened" />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <Label for="issueinput4">Date Fixed</Label>
                                             <Input type="date" id="issueinput4"  name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" />
                                          </FormGroup>
                                       </Col>
                                    </Row>
                                    <FormGroup>
                                       <Label for="issueinput5">Priority</Label>
                                       <Input type="select" id="issueinput5" name="priority"  data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority">
                                          <option value="low">Low</option>
                                          <option value="medium">Medium</option>
                                          <option value="high">High</option>
                                       </Input>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="issueinput6">Status</Label>
                                       <Input type="select" id="issueinput6" name="status"  data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Status">
                                          <option value="not started">Not Started</option>
                                          <option value="started">Started</option>
                                          <option value="fixed">Fixed</option>
                                       </Input>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="issueinput8">Comments</Label>
                                       <div className="position-relative has-icon-right">
                                          <Input type="textarea" id="issueinput8" rows="5"  name="comments"  data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Comments"/>
                                          <div className="form-control-position">
                                             <MessageSquare size={16} color="#212529" />
                                          </div>
                                       </div>
                                    </FormGroup>
                                 </div>
                                 <div className="form-actions">
                                    <Button color="warning" className="mr-1">
                                       <X size={16} color="#FFF" /> Cancel
                                    </Button>
                                    <Button color="primary">
                                       <CheckSquare size={16} color="#FFF" /> Save
                                    </Button>
                                 </div>
                              </Form>
                           </div>
                           <div className="">
                              <div className="installation">Installation</div>                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save reactstrap react react-dom</div>
                                 </div>
                              </Col>
                           </div>                         

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                            <CopyToClipboard text={issuetrack}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {issuetrack}
                              </PrismCode> 
                              
                        </Col>
                     </CardBody>
                  </Card>
               </Col>
                             
            </Row>



         </Fragment>
      );
   }
}

export default BasicForms;
