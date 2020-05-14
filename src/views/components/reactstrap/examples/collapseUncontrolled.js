import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const UncontrolledCollapseComponent = ({
  color = "primary",
  buttonText = "Toggle",
  cardText = "This is uncontrolled collapse component example"
}) => {
  return(
    <div>
      <Button color={color} id="toggler" style={{ marginBottom: '1rem' }}>
        {buttonText}
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            {cardText}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};
export default UncontrolledCollapseComponent;