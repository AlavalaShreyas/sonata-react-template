import React, { PureComponent } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import { CarouselComponent } from "react-sonata-components-library";

import cardImg12 from "../../assets/img/photos/12.jpg";
import cardImg13 from "../../assets/img/photos/13.jpg";
import cardImg17 from "../../assets/img/photos/17.jpg";

const items = [
  {
    src: cardImg12,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: cardImg13,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: cardImg17,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

class UserListCard extends PureComponent {
  render() {
    const onChangeSlide = (props) => {
      console.log(props);
    };
    return (
      <Card className="text-left">
        <CarouselComponent
          index={0}
          data={items}
          onChangeSlide={onChangeSlide}
        />
        <CardBody>
          <CardTitle>{this.props.cardTitle}</CardTitle>
          <CardText>{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default UserListCard;
