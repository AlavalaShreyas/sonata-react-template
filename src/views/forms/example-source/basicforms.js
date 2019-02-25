const BasicFormExampleSource = `
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
                       
                     </CardBody>
                  </Card>
               </Col>
            </Row>
           

         </Fragment>
      );
   }
}

export default BasicForms;


`;

export default BasicFormExampleSource;