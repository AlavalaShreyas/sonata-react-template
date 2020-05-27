import React from "react";
import { Button } from "reactstrap";

const ButtonsDefault = ({iconType = "primary", color="primary", buttonText="Primary"}) => {
  const compositeDefaulButton = {
    "primary" : (<Button color={color}>{buttonText}</Button>),
    "secondary" : (<Button color={color}>{buttonText}</Button>),
    "success" : (<Button color={color}>{buttonText}</Button>),
    "info" : (<Button color={color}>{buttonText}</Button>),
    "warning" : (<Button color={color}>{buttonText}</Button>),
    "danger" : (<Button color={color}>{buttonText}</Button>)
  };
  return compositeDefaulButton[iconType];
};

export default ButtonsDefault;