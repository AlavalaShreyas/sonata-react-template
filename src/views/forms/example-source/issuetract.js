const issuetrack = `
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

export default issuetrack;