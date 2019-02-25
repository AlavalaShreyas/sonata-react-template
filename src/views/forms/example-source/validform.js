const ValidFormExampleSource = `
import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// import classnames from "classnames";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component




const formSchema = Yup.object().shape({
   required: Yup.string()
      .required("Required"),
   email: Yup.string()
      .email("Invalid email")
      .required("Required"),
   number: Yup.number()
      .required("Required"),
   url: Yup.string()
      .url()
      .required("Required"),
   date: Yup.date()
      .required("Required"),
   minlength: Yup.string()
      .min(4, "Too Short!")
      .required("Required"),
   maxlength: Yup.string()
      .max(5, "Too Long!")
      .required("Required"),
});

class Validation extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Form Validation</ContentHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Formik</CardTitle>
                           <Col md="12" lg="6" className="leftDiv">
                              <Formik
                                 initialValues={{
                                    required: "",
                                    email: "",
                                    url: "",
                                    number: "",
                                    date: "",
                                    minlength: "",
                                    maxlength: ""
                                 }}
                                 validationSchema={formSchema}
                                 onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                 }}
                              >
                                 
                              </Formik>
                           </Col>
                           
                        
                         
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default Validation;
`;

export default ValidFormExampleSource;