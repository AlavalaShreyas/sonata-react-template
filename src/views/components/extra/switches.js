import React, { Component, Fragment } from "react";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "react-toggle/style.css";
import "../../../assets/scss/views/components/extra/switch.scss";

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";
import {
   Card,
   CardBody,
   CardTitle,
   Row,
   Col
} from "reactstrap";

// Import examples
import WrapperLabel from "./examples/switchWrapperLabel";
import AdjacentLabel from "./examples/switchAdjacentLabel";
import NoLabel from "./examples/switchNoLabel";
import FormData from "./examples/switchFormData";
import Controlled from "./examples/switchControlled";
import Disbaled from "./examples/switchDisabled";
import CustomClassname from "./examples/switchCustomClassname";
import CustomIcon from "./examples/switchCustomIcon";
import NoIcon from "./examples/switchNoIcon";

// Import Example Source Code
import WrapperLabelSource from "./exampleSource/switchWrapperLabel";
import AdjacentLabelSource from "./exampleSource/switchAdjacentLabel";
import NoLabelSource from "./exampleSource/switchNoLabel";
import FormDataSource from "./exampleSource/switchFormData";
import ControlledSource from "./exampleSource/switchControlled";
import DisbaledSource from "./exampleSource/switchDisabled";
import CustomClassnameSource from "./exampleSource/switchCustomClassname";
import CustomIconSource from "./exampleSource/switchCustomIcon";
import NoIconSource from "./exampleSource/switchNoIcon";

//New Sonata Library Implementaion
import {Switch} from 'react-sonata-components-library';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Switches extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Switches</ContentHeader>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                     <LiveProvider
                        code={NoIconSource}
                        scope={{
                           Switch,
                        }}
                     >
                  <Col md="12" lg="6" className="leftDiv">
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
                            import {"{ Switch }"} from
                            "react-sonata-components-library";
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={NoIconSource}
                      onCopy={() => this.setState({ copied: true })}
                    >
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

export default Switches;
