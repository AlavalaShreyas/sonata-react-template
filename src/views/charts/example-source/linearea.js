const lineareachart = `
import React, { Fragment } from "react";
import { Row } from "reactstrap";
import { ChartLib } from "react-sonata-components-library";

import {
    AreaChartdata
} from "./chartData";

const ChartJS = props => (
   <Fragment>    
      <Row>
         <ChartLib height={400} details={AreaChartdata} type='linArea' /> 
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default lineareachart;