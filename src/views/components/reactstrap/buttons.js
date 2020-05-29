import React, { Component, Fragment } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import classnames from "classnames";
import {
   ButtonDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Button, 
   ButtonGroup,
   Card,
   CardBody, 
   CardTitle, 
   Row, 
   Col
 } from "reactstrap";
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
import CollapseDefaultSource from "./exampleSource/collapse";
import ButtonsRadioSource from "./exampleSource/buttonRadio";
import ButtonsDropdownSource from "./exampleSource/buttonsDropdown";
import ButtonsGroupSource from "./exampleSource/buttonsGroup";
import ButtonsCheckboxSource from "./exampleSource/buttonsCheckbox";

import { ButtonDefault, 
         ButtonGradient, 
         ButtonSizing, 
         ButtonSquare, 
         ButtonIcon, 
         ButtonRound, 
         ButtonsGroup,
         ButtonCheckbox,
         ButtonRadio as ButtonsRadio,
         ButtonsDropdown as Dropdown,
         CollapseComponent
 } from "react-sonata-components-library";

import BtnRadioExample from "./examples/buttonRadio";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const radioButtonCode = ButtonsRadioSource;
const radioButtonScope = {
   ButtonsRadio,
   classnames,
   Button, 
   ButtonGroup,
   BtnRadioExample
}
const dropdownButtonCode = ButtonsDropdownSource;
const dropdownButtonScope = {
   Dropdown,
   ButtonDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
}
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

               <Col sm="12">
                  <Card>
                     <CardBody>
                        
                <LiveProvider
                  code={radioButtonCode}
                  scope={radioButtonScope}>
                        <CardTitle>Button Radio Design</CardTitle>
                        
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
                            import ButtonRadio from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={radioButtonCode}
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
                        code={ButtonsCheckboxSource}
                        scope={{ButtonCheckbox}}
                        >
                        <CardTitle>Button Checkbox Design</CardTitle>
                        
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
                            import {"{ ButtonCheckbox }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsCheckboxSource}
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
                  code={ButtonsGroupSource}
                  scope={{ButtonsGroup}}>
                        <CardTitle>Button Group Design</CardTitle>
                        
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
                            import {"{ButtonsGroup}"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={ButtonsGroupSource}
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
                  code={dropdownButtonCode}
                  scope={dropdownButtonScope}>
                        <CardTitle>Button Dropdown Design</CardTitle>
                        
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
                            import {"{ButtonsDropdown}"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={dropdownButtonCode}
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
                        code={CollapseDefaultSource}
                        scope={{CollapseComponent}}
                        >
                        <CardTitle>Collapse Component Design</CardTitle>
                        
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
                            import {"{ CollapseComponent }"} from
                            "react-sonata-components-library";
                          </div>
                                 </div>
                              </Col>
                           </div>

                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={CollapseDefaultSource}
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

export default buttons;
