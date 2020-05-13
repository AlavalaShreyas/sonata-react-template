const TooltipsDefaultSource = `
//import React, { useState } from "react";
//import { Button, Tooltip } from "reactstrap";

class TooltipMulti extends React.Component {
   constructor() {
      super()
      this.state = {
         top: false,
         bottom: false,
         left: false,
         right: false, 
      };
    }
    toggleTop(){
         this.setState({
            top: !this.state.top,
         });
   };
   toggleBottom(){
      this.setState({
         bottom: !this.state.bottom,
      });
   };
   toggleLeft(){
      this.setState({
         left: !this.state.left,
      });
   };
   toggleRight(){
      this.setState({
         right: !this.state.right,
      });
   };
   render() {
      return (
         <div>
         <span>
            <Button className="mr-1" color="secondary" id="Tooltip-0">
               buttonTop
            </Button>
            <Tooltip placement="top" isOpen={this.state.top} target="Tooltip-0" toggle={this.toggleTop.bind(this)}>
			      TopPlacement
            </Tooltip>
         </span>
         <span>
            <Button className="mr-1" color="secondary" id="Tooltip-1">
               buttonBottom
            </Button>
            <Tooltip placement="bottom" isOpen={this.state.bottom} target="Tooltip-1" toggle={this.toggleBottom.bind(this)}>
			      BottomPlacement
            </Tooltip>
         </span>
         <span>
            <Button className="mr-1" color="secondary" id="Tooltip-2">
               buttonLeft
            </Button>
            <Tooltip placement="left" isOpen={this.state.left} target="Tooltip-2" toggle={this.toggleLeft.bind(this)}>
			      LeftPlacement
            </Tooltip>
         </span>
         <span>
            <Button className="mr-1" color="secondary" id="Tooltip-3">
               buttonRight
            </Button>
            <Tooltip placement="right" isOpen={this.state.right} target="Tooltip-3" toggle={this.toggleRight.bind(this)}>
			      RightPlacement
            </Tooltip>
         </span>
         </div>
      );
   }
}`;

export default TooltipsDefaultSource;
