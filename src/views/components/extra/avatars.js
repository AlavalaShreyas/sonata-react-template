import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
// eslint-disable-next-line
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import  { ImageAvatar,LetterAvatar }  from "react-sonata-components-library";
// Import Example Source Code
import SelectLetterAvatarSource from "./exampleSource/letterAvatars";
import SelectImageAvatarSource from "./exampleSource/imageAvatars";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class avatars extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardBody>
                <LiveProvider
                  code={SelectImageAvatarSource}
                  scope={{ImageAvatar}}
                >
                  <CardTitle>Avatar Component</CardTitle>

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
                            npm i react-sonata-components-library
                            <br />
                            import {"{ ImageAvatar }"} from
                            'react-sonata-components-library'
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={SelectImageAvatarSource}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <span className="copy-code">Copy Code</span>
                    </CopyToClipboard>
                    <div style={{ backgroundColor: "#000000" }}>
                      <LiveEditor />
                    </div>
                  </Col>
                </LiveProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardBody>
                <LiveProvider
                  code={SelectLetterAvatarSource}
                  scope={{LetterAvatar}}
                >
                  <CardTitle>Avatar Component</CardTitle>

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
                            npm i react-sonata-components-library
                            <br />
                            import {"{ LetterAvatar }"} from
                            'react-sonata-components-library'
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={SelectLetterAvatarSource}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <span className="copy-code">Copy Code</span>
                    </CopyToClipboard>
                    <div style={{ backgroundColor: "#000000" }}>
                      <LiveEditor />
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

export default avatars;
