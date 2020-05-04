import React from "react";
import { Button } from "reactstrap";

const ButtonsGradient = ({ iconType = "Primary", className = "gradient-purple-bliss", buttonText = "Primary"}) => {
  const gradientButton = {
    "Primary": (<Button className={className} >{buttonText}</Button>),
    "Secondary": (<Button className={className} >{buttonText}</Button>),
    "Success": (<Button className={className} >{buttonText}</Button>),
    "Info": (<Button className={className} >{buttonText}</Button>),
    "Warning": (<Button className={className} >{buttonText}</Button>),
    "Danger": (<Button className={className}>{buttonText}</Button>)
  };
  return gradientButton[iconType];
};

export default ButtonsGradient;

