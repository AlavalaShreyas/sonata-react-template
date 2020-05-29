import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// Import examples
// import RangeSlider from "./examples/rangeSlider";

import { Sliders } from "react-sonata-components-library";

// Import Example Source Code
import RangeSliderSource from "./exampleSource/rangeSlider";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class RangeSlider extends Component {
   render() {
      return (
         <Fragment>
            {/* <ContentHeader>Range Slider</ContentHeader>
            <ContentSubHeader>
               <p>Range Slider UI component for React.</p>
               <a href="https://github.com/react-component/slider/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/react-component/slider.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/rc-slider.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader> */}
            {/* <Row> */}
            <Row className="row-eq-height">
            <Col sm="12">
                  <Card>
                     <CardBody>
                        <LiveProvider
                        code={RangeSliderSource}
                        scope={{Sliders}}
                        >
                        <CardTitle>Sliders Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                        <LiveError />
                        <LivePreview />
                           <div className="" style={{ marginTop: "37px"}}>
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ Sliders }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={RangeSliderSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <LiveEditor style={{ background: "#272822" }} />
                           
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

export default RangeSlider;
