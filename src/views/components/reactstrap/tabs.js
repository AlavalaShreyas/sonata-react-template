import React, { Fragment, Component  } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

import TabsExampleSource from "./exampleSource/tabs";
import TabsExample from "./examples/tabs";

import CalendarSource from "./exampleSource/calendar";
import  Calendarr   from "./examples/calendar";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Tabs as Tabss,
  TabsContent,
  TabsBody,
  DatePicker
} from "react-sonata-components-library";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

 import Calendar from "react-calendar";
 import "react-calendar/dist/Calendar.css";

const code = TabsExampleSource;
const scope = {
  TabsExample,
  NavItem,
  NavLink,
  Nav,
  classnames,
  TabContent,
  TabPane,
  Tabss,
  TabsContent,
  TabsBody,
};



class MutlipleTabs extends React.Component {
  render() {
    return (<Row>
      <Col md="12" lg="12">
        <Card>
          <CardBody>
            <CardTitle>Tabs</CardTitle>
            <LiveProvider code={code} scope={scope} noInline={false}>
              <Col md="12" lg="6" className="leftDiv">
                {/* <TabsExample /> */}
                <LivePreview />
                <LiveError />
                <div className="installation-steps">
                             <div className="installation-box">npm  install react-sonata-components-library</div>
                             <div className="installation-box">import Tabs, TabsBody from 'react-sonata-components-library'</div>
                          </div>
              </Col>
              <Col md="12" lg="6" className="rightDiv">
                <span className="copy-code">Edit Code</span>
                <div style={{ backgroundColor: "#0E0E0E",color:"#1EDCD3" }}>
                  <LiveEditor />
                </div>
              </Col>
            </LiveProvider>
          </CardBody>
        </Card>
      </Col>
    </Row>);
  };
};

const calendarCode = CalendarSource;
const calenderScope = {Calendarr,Calendar,DatePicker};

class DatePick extends React.Component {
  render() {
    return (<Row>
      <Col md="12" lg="12">
        <Card>
          <CardBody>
            <CardTitle>Date Picker</CardTitle>
            <LiveProvider code={calendarCode} scope={calenderScope} noInline={false}>
              <Col md="12" lg="6" className="leftDiv">
                <LivePreview />
                <LiveError />
                <br/>
                <div className="installation-steps">
                             <div className="installation-box">npm  install react-sonata-components-library</div>
                             <div className="installation-box">import DatePicker 'react-sonata-components-library'</div>
                          </div>
              </Col>
              <Col md="12" lg="6" className="rightDiv">
                <span className="copy-code">Edit Code</span>
                <div style={{ backgroundColor: "#0E0E0E",color:"#1EDCD3" }}>
                  <LiveEditor />
                </div>
              </Col>
            </LiveProvider>
          </CardBody>
        </Card>
      </Col>
    </Row>);
  };
};

class Tabs extends React.Component {
  render() {
    return (
      <Fragment>
       <MutlipleTabs />
       <DatePick/>
      </Fragment>
    );
  }
}

export default Tabs;
