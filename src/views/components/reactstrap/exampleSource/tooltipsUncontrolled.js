const TooltipsUncontrolledSource = `
//import React from "react";
//import { UncontrolledTooltip } from "reactstrap";

class TooltipUncontrolled extends React.Component {

   render() {
      const id = Math.random().toString(36).substr(2, 9)
      return (
         <div>
         <p>
            <span
               className="btn-link"
               href="#"
               id="tooltip-0"
            >
               Hover Me
            </span>
            .
         </p>
         <UncontrolledTooltip
            placement="right"
            target="tooltip-0"
         >
            you hovered on me
         </UncontrolledTooltip>
      </div>
      );
   }
}`;

export default TooltipsUncontrolledSource;


