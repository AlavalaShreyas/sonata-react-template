import React from "react";
import { Button } from "reactstrap";

const ButtonsSquare = ({ iconType = "Primary", className = "btn-square", color = "primary" ,buttonText = "Primary"}) => {
  const compositeButtonSquare = {
    "Primary": (<Button className={className} color={color}>{buttonText}</Button>),
    "Secondary": (<Button className={className} color={color}>{buttonText}</Button>),
    "Success": (<Button className={className} color={color}>{buttonText}</Button>),
    "Info": (<Button className={className} color={color}>{buttonText}</Button>),
    "Warning": (<Button className={className} color={color}>{buttonText}</Button>),
    "Danger": (<Button className={className} color={color}>{buttonText}</Button>)
  };
  return compositeButtonSquare[iconType];
};

export default ButtonsSquare;