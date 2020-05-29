import React from "react";
import { ButtonsDropdown as Dropdown } from "react-sonata-components-library";

class ButtonsDropdown extends React.Component {

    render() {
    return (
<Dropdown 
dropdownValues={["Cricket","Badminton","Football"]} 
color="primary" 
value="Select an Option"/>
    );
  }
};
export default ButtonsDropdown;
