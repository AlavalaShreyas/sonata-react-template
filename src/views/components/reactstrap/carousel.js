import React, { Fragment, Component } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CarouselComponentSource from "./exampleSource/carouselcomponent";
import { CarouselComponent } from "react-sonata-components-library";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import cardImg12 from "../../../assets/img/photos/12.jpg";
import cardImg13 from "../../../assets/img/photos/13.jpg";
import cardImg17 from "../../../assets/img/photos/17.jpg";

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

class Carousel extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardBody>
                <LiveProvider
                  code={CarouselComponentSource}
                  scope={{
                    CarouselComponent,
                    items,
                  }}
                >
                  <CardTitle>Carousel</CardTitle>
                  <Col md="12" lg="6" className="leftDiv mt-4">
                    <LivePreview />
                    <LiveError />
                    <div className="">
                      <div className="installation">Installation</div>
                      <Col md="12" className="leftDiv">
                        <div className="installation-steps">
                          <div className="installation-text">
                            Download and install the package. Use Node.js v8.0.0
                            or later.
                          </div>
                          <div className="installation-box">
                            npm install --save react-sonata-components-library
                          </div>
                          <div className="installation-box">
                            import {"{ CarouselComponent }"} from
                            "react-sonata-components-library";
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={CarouselComponentSource}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <span className="copy-code">Copy Code</span>
                    </CopyToClipboard>

                    <LiveEditor style={{ background: "#272822" }} />
                  </Col>
                  <Col md="12" lg="12" className="leftDiv">
                    <div className="installation-text mt-2">Example Data</div>
                    <div className="installation-box">
                      <pre>{`
  const items = [
    {
      src:
        "https://image.shutterstock.com/z/stock-photo-family-of-funny-attractive-pineapples-in-stylish-sunglasses-on-the-sand-against-turquoise-sea-627188573.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src:
        "https://image.shutterstock.com/z/stock-photo-tranquil-beach-scene-exotic-tropical-beach-landscape-for-background-or-wallpaper-design-of-summer-644740495.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src:
        "https://image.shutterstock.com/z/stock-photo-beach-accessories-on-table-on-beach-summer-holidays-629868767.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];  
                            `}</pre>
                    </div>
                  </Col>
                </LiveProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Carousel;
