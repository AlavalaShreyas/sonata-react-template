import React from "react";
import { Button } from "reactstrap";

const ButtonRound = ({ iconType = "Primary", className = "btn-round", color = "primary", buttonText = "Primary" }) => {
  const compositeButtonRound = {
    "Primary": (<Button className={className} color={color} >{buttonText}</Button>),
    "Success": (<Button className={className} color={color} >{buttonText}</Button>),
    "Info": (<Button className={className} color={color} >{buttonText}</Button>),
    "Danger": (<Button className={className} color={color} >{buttonText}</Button>)
  };
  return compositeButtonRound[iconType];
};

export default ButtonRound;