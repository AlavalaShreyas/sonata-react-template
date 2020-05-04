const linechart = `
import React, { Fragment } from "react";
import { Row } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";

import {
    LineChartData
} from "./chartData";

const ChartJS = props => (
   <Fragment>
      <Row>
         <ChartLib type='line' details={LineChartData} />
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default linechart;