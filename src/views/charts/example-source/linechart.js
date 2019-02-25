const linechart = `
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";

import {
    LineChartData
} from "./chartData";

const ChartJS = props => (
   <Fragment>
    
      <Row>

         <Col md="12" lg="12" className="leftDiv">
         <Line height={400} data={LineChartData.data} options={LineChartData.options} />
         </Col>
        
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default linechart;