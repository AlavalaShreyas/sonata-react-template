import React from "react";
import { Button } from "reactstrap";
import {
  Settings,
  Info,
  ThumbsUp,
  AlertOctagon,
  AlertTriangle,
} from "react-feather";

const ButtonsIcon = ({
  iconType = "Settings",
  iconSize = "16",
  buttonType = "primary",
  iconColor = "#FFF",
  buttonText = "Primary",
}) => {
  const compositeButton = {
    Settings: (
      <Button color={buttonType}>
        <Settings size={iconSize} color={iconColor} /> {buttonText}
      </Button>
    ),
    Info: (
      <Button color={buttonType}>
        <Info size={iconSize} color={iconColor} /> {buttonText}
      </Button>
    ),
    ThumbsUp: (
      <Button color={buttonType}>
        <ThumbsUp size={iconSize} color={iconColor} /> {buttonText}
      </Button>
    ),
    AlertOctagon: (
      <Button color={buttonType}>
        {buttonText} <AlertOctagon size={iconSize} color={iconColor} />
      </Button>
    ),
    AlertTriangle: (
      <Button color={buttonType}>
        {buttonText} <AlertTriangle size={iconSize} color={iconColor} />
      </Button>
    ),
  };

  return compositeButton[iconType];
};

export default ButtonsIcon;
