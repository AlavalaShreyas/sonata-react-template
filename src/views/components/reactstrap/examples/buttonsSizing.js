import React from "react";
import { Button } from "reactstrap";

const ButtonSizing = ({ iconType = "Primary", color = "primary", size = "lg", buttonText = "Primary" }) => {
  const compositeButtonSizing = {
    "Primary": (<Button color={color} size={size} >{buttonText}</Button>),
    "Success": (<Button color={color} size={size} >{buttonText}</Button>),
    "Info": (<Button color={color} size={size} >{buttonText}</Button>),
    "Danger": (<Button color={color} size={size} >{buttonText}</Button>)
  };
  return compositeButtonSizing[iconType];
};

export default ButtonSizing;