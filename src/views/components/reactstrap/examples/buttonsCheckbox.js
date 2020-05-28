import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const ButtonCheckbox = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const { checkboxes,color } = props;
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div>
      <ButtonGroup>
        {checkboxes.length ? checkboxes.map((name, index) =>(
          <Button 
            color={color} 
            onClick={() => onCheckboxBtnClick(index)} 
            active={cSelected.includes(index)}
            key={index}
          >
            {name}
          </Button>
        )) : null}
      </ButtonGroup>
    </div>
  );
};

export default ButtonCheckbox;

