import React, { Component } from "react";
import {InputBox} from 'react-sonata-components-library';

class InputBoxExample extends Component {
   render() {
      return (
         <InputBox
        id="exampleEmail"
        type="email" 
        name="email" 
        placeholder="placeholder"
        bsSize="sm"
        valid= {true}
        invalid={false}
        disabled={false}
    />
      );
   }
}

export default InputBoxExample;
