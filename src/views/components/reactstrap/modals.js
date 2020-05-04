import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ModalComponentSource from "./exampleSource/modalcomponent";
import { ModalComponent } from "react-sonata-components-library";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class Modals extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardBody>
                <LiveProvider
                  code={ModalComponentSource}
                  scope={{
                    ModalComponent,
                  }}
                >
                  <CardTitle>Modal</CardTitle>
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
                            import {"{ ModalComponent }"} from
                            "react-sonata-components-library";
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={ModalComponentSource}
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

export default Modals;
