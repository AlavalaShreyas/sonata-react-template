const piecharts = `
import React, { Fragment } from "react";
import { Row } from "reactstrap";
import { ChartLib } from "react-sonata-components-library";

import {
    PieData
} from "./chartData";

const ChartJS = props => (
   <Fragment>
      <Row>
        <ChartLib type = 'pie' details = {PieData} />
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default piecharts;