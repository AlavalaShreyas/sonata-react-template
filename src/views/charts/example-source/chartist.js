const ChartistExampleSource = `// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import ChartistGraph from "react-chartist";
import ChartistLib from "chartist";
import "chartist/dist/chartist.min.css";

// import internal(own) modules
import { ChartistData } from "./chartistData";
import "../../../assets/scss/views/charts/chartist.scss";

const Chartist = props => (
   <Fragment>
      <Row>
         <Col sm="12" className="content">
            <div className="content-header text-dark">List</div>
            
         </Col>
      </Row>
      <Row>
         <Col md="12" lg="12" className="leftDiv">
            <CardHeader>
               <CardTitle>LINE WITH AREA CHART</CardTitle>
            </CardHeader>
            <CardBody>
               <Col md="12" lg="12" className="leftDiv">
                  <ChartistGraph
                     data={ChartistData.LineArea1Data}
                     type="Line"
                     options={{
                        height: "400px",
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        onlyInteger: true,
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        },
                        axisX: {
                           showGrid: false
                        }
                     }}
                  />
               </Col>
              
            </CardBody>
         </Col>
       

         
      </Row>
   </Fragment>
);

export default Chartist;`;

export default ChartistExampleSource;