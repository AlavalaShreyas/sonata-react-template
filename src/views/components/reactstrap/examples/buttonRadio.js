import React, { Component } from "react";
import { ButtonRadio as ButtonsRadio} from "react-sonata-components-library";

class ButtonRadio extends Component {
   constructor() {
      super()
      this.state = {
         activeButton: 1
      };
      this.toggle=this.toggle.bind(this);
    }
   toggle(radioButton){
      if (this.state.activeButton !== radioButton) {
         this.setState({
          activeButton: radioButton
         });
      }
   };
   
   render() {
      return (
         <div>
          <ButtonsRadio
          radios = {["Cricket", "Badminton", "Chess"]}
          activeButton = {this.state.activeButton}
          toggle = {this.toggle}
          color = "primary"
          />  
          </div>  
      );
   }
}

export default ButtonRadio;
