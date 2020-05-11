import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS

// Import Example Source Code
import ButtonsDefaultSource from "./exampleSource/buttonsDefault";
import ButtonsIconSource from "./exampleSource/buttonsIcon";
import ButtonsSquareSource from "./exampleSource/buttonsSquare";
import ButtonsRoundSource from "./exampleSource/buttonsRound";
import ButtonsSizingSource from "./exampleSource/buttonsSizing";
import ButtonsGradientSource from "./exampleSource/buttonsGradient";

import { ButtonDefault } from "react-sonata-components-library";
import { ButtonGradient }from "react-sonata-components-library";
import { ButtonSizing } from "react-sonata-components-library";
import { ButtonSquare } from "react-sonata-components-library";
import { ButtonIcon } from "react-sonata-components-library";
import { ButtonRound } from "react-sonata-components-library";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";


class buttons extends Component {
   state = {
      value: '',
      copied: false,
    };
   render() {
      return (
         <Fragment>
            <Row className="row-eq-height">
            <Col sm="12">
                  <Card>
                     <CardBody>
                        <LiveProvider
                        code={ButtonsIconSource}
                        scope={{ButtonIcon}}
                        >
                        <CardTitle>Button Icon Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                        <LiveError />
                        <LivePreview />
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonIcon }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsIconSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <LiveEditor style={{ background: "#272822" }} />
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12">
                  <Card>
                     <CardBody>
                        <LiveProvider
                        code={ButtonsGradientSource}
                        scope={{ButtonGradient}}
                        >
                        <CardTitle>Button Gradient Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                        <LiveError />
                        <LivePreview />
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonGradient }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsGradientSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                              <LiveEditor style={{ background: "#272822" }} />
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        
                <LiveProvider
                  code={ButtonsSizingSource}
                  scope={{
                    ButtonSizing,
                  }}
                >
                        <CardTitle>Button Sizing Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError/>
                           <LivePreview/>
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonSizing }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsSizingSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <LiveEditor style={{ background: "#272822" }}/>
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12">
                  <Card>
                     <CardBody>
                        
                <LiveProvider
                  code={ButtonsDefaultSource}
                  scope={{
                    ButtonDefault,
                  }}
                >
                        <CardTitle>Button default Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError/>
                           <LivePreview/>
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonDefault }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsDefaultSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <LiveEditor style={{ background: "#272822" }}/>
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12">
                  <Card>
                     <CardBody>
                        
                <LiveProvider
                  code={ButtonsRoundSource}
                  scope={{
                    ButtonRound,
                  }}
                >
                        <CardTitle>Button Round Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError/>
                           <LivePreview/>
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonRound }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsRoundSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <LiveEditor style={{ background: "#272822" }}/>
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12">
                  <Card>
                     <CardBody>
                        
                <LiveProvider
                  code={ButtonsSquareSource}
                  scope={{
                    ButtonSquare,
                  }}
                >
                        <CardTitle>Button Square Design</CardTitle>
                        
                        <Col md="12" lg="6" className="leftDiv">
                           <LiveError/>
                           <LivePreview/>
                           <div className="">
                              <div className="installation">Installation</div>
                        
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm install --save react-sonata-components-library</div>
                                    <div className="installation-box">
                            import {"{ ButtonSquare }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsSquareSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <LiveEditor style={{ background: "#272822" }}/>
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

export default buttons;
