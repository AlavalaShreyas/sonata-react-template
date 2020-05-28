import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import InputBoxExample from "./examples/inputGroup";
import InputGroupAddons from "./examples/inputGroupAddons";
import InputGroupAddonSizing from "./examples/inputGroupAddonSizing";
import InputGroupButtons from "./examples/inputGroupButtons";

// Import Example Source Code
import InputGroupSource from "./exampleSource/inputGroup";
import InputGroupAddonsSource from "./exampleSource/inputGroupAddons";
import InputGroupAddonSizingSource from "./exampleSource/inputGroupAddonSizing";
import InputGroupButtonsSource from "./exampleSource/inputGroupButtons";

////New Sonata Library Implementaion
import {InputBox} from 'react-sonata-components-library';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class inputGroup extends Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>InputBox</ContentHeader>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                     <LiveProvider
                        code={InputGroupSource}
                        scope={{
                           InputBox,
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
                            import {"{ InputBox }"} from
                            "react-sonata-components-library";
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={InputGroupSource}
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

export default inputGroup;
