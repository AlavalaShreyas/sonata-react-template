import React, { Component } from "react";
import {toastr} from 'react-redux-toastr';
import { Row, Col, Button } from "reactstrap";
import {Toaster} from 'react-sonata-components-library';

class ToastrPositions extends Component {
   render() {
      return (
         <Toaster
              buttonText="Launch Toaster"
              buttonType="primary"
              className="success my-2 rounded"
              toastrType="success"
              toastrHeaderText="Toaster HeaderText"
              toastrMessageText="This is a toast message — check it out!"
         />
      );
   }
}

export default ToastrPositions;
