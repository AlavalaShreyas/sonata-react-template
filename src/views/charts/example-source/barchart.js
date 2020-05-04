const barcharts = `
import React, { Fragment } from "react";
import { ChartLib } from "react-sonata-components-library";
import { Row } from "reactstrap";
import {
   BarData
} from "./chartData";

// Bar Chart Data Structure 
// export const BarData = {
//    data: {
//       labels: ["xxx","yyy"],
//       datasets: [
//          {
//             label: "Series A",
//             data: [65, 59, 80, 81, 56, 55, 40],
//             backgroundColor: "rgba(255, 141, 96, 0.8)",
//             borderColor: "rgba(148,159,177,1)",
//             pointBackgroundColor: "rgba(148,159,177,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(148,159,177,0.8)"
//          },
//          {
//             data: [28, 48, 40, 19, 86, 27, 90],
//             label: "Series B",
//             backgroundColor: "rgba(0, 157, 160, 0.8)",
//             borderColor: "rgba(148,159,177,1)",
//             pointBackgroundColor: "rgba(148,159,177,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(148,159,177,0.8)"
//          }
//       ]
//    },
//    options: {
//       scaleShowVerticalLines: false,
//       responsive: true,
//       maintainAspectRatio: false
//    }
// };

const ChartJS = props => (
   <Fragment>
      <Row>
         <ChartLib type = 'bar' details = {BarData} />       
      </Row>
   </Fragment>
);

export default ChartJS;`;

export default barcharts;