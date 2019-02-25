const piecharts = `
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";

import {
    PieData
} from "./chartData";

const ChartJS = props => (
   <Fragment>
    
      <Row>

         <Col md="12" lg="12" className="leftDiv">
         <Pie height={400} data={PieData.data} options={PieData.options} /> 
         </Col>
        
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default piecharts;