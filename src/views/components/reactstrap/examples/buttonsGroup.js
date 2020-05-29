import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

const GroupButton = (props) => {
  const { name } = props;
  return(
    <Button color = "primary">{name}</Button>
  );
};

const ButtonsGroup = (props) => {
  const {buttons, size} = props;
  return(
    <ButtonToolbar>
      <ButtonGroup size={size}>
        {buttons.length ? buttons.map((name, index) => (
          <GroupButton
            name = {name}
            key = {index}
          />
        )) : null}
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default ButtonsGroup;