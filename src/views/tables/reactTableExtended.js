import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Alert, Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import ReactTable from "./examples/reactSimpleTable";
import ReactTableSource from "./example-source/reactSelectTable";

class reactTableExtended extends Component {
  render() {
    return (
      <Fragment>
        <Row className="row-eq-height">
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>React Table Design</CardTitle>

                <Col md="12" lg="12" className="leftDiv">
                  <ReactTable />
                  <div className="">
                    <div className="installation">Installation</div>

                    <Col md="12" className="leftDiv">
                      <div className="installation-steps">
                        <div className="installation-text">
                          Download and install the package. Use Node.js v8.0.0
                          or later.
                        </div>
                        <div className="installation-box">
                          <div>
                            npm install react-table
                            react-sonata-components-library
                          </div>
                          <div>
                            import Table from react-sonata-components-library
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col md="12" lg="6" className="rightDiv">
                  <CopyToClipboard
                    text={ReactTableSource}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span className="copy-code">Copy Code</span>
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-javascript">
                    {ReactTableSource}
                  </PrismCode>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default reactTableExtended;
