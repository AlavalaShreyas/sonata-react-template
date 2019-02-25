// import external modules
import React, {Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
   BarData,
   LineChartData,
   AreaChartdata,
   ScatterData,
   DoughnutData,
   RadarData,
   PieData,
   PolarData
} from "./chartData";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component



// Import Example Source Code
import barcharts from "../example-source/barchart";
import linechart from "../example-source/linechart";
import lineareachart from "../example-source/linearea";
import piecharts from "../example-source/piechart";

class ChartJS extends Component {

   render() {
      return (
         <Fragment>
               <Row className="row-eq-height">
                  <Col sm="12">
                     <Card>
                        <CardBody>
                           <CardTitle>Charts Design</CardTitle>
                           
                           <Col md="12" lg="6" className="leftDiv">
                              <Col md="12" lg="12" className="leftDiv">
                                 <Bar height={400} data={BarData.data} options={BarData.options} />                                         
                              </Col>  
                              <Col md="12" lg="12" className="leftDiv">
                                 <div className="">
                                    <div className="installation">Installation</div>                     
                                    <Col md="12" className="leftDiv">
                                       <div className="installation-steps">
                                          <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                          <div className="installation-box">
                                             <div>npm install react-chartjs-2 chart.js --save</div>
                                             <div>npm install --save reactstrap react react-dom</div>
                                          </div>
                                       </div>
                                    </Col>
                                 </div>                                      
                              </Col>                                                         
                           </Col>  
                           <Col md="12" lg="6" className="rightDiv">
                                 <CopyToClipboard text={barcharts}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-code">Copy Code</span>
                                 </CopyToClipboard>
                                 <PrismCode
                                    component="pre"
                                    className="language-javascript"
                                 >
                                    {barcharts}
                                 </PrismCode>                     
                           </Col>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
               <Row className="row-eq-height">
                  <Col sm="12">
                     <Card>
                        <CardBody>
                           <CardTitle>LINE Charts</CardTitle>
                           
                           <Col md="12" lg="6" className="leftDiv">
                              <Col md="12" lg="12" className="leftDiv">
                                 <Line height={400} data={LineChartData.data} options={LineChartData.options} />                                       
                              </Col>  
                              <Col md="12" lg="12" className="leftDiv">
                                 <div className="">
                                    <div className="installation">Installation</div>                     
                                    <Col md="12" className="leftDiv">
                                       <div className="installation-steps">
                                          <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                          <div className="installation-box">
                                             <div>npm install react-chartjs-2 chart.js --save</div>
                                             <div>npm install --save reactstrap react react-dom</div>
                                          </div>
                                       </div>
                                    </Col>
                                 </div>                                      
                              </Col>                                                         
                           </Col>  
                           <Col md="12" lg="6" className="rightDiv">
                                 <CopyToClipboard text={linechart}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-code">Copy Code</span>
                                 </CopyToClipboard>
                                 <PrismCode
                                    component="pre"
                                    className="language-javascript"
                                 >
                                    {linechart}
                                 </PrismCode>                     
                           </Col>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
               <Row className="row-eq-height">
                  <Col sm="12">
                     <Card>
                        <CardBody>
                           <CardTitle>LINE AREA Charts</CardTitle>
                           
                           <Col md="12" lg="6" className="leftDiv">
                              <Col md="12" lg="12" className="leftDiv">
                                 <Line height={400} data={AreaChartdata.data} options={AreaChartdata.options} />                                        
                              </Col>  
                              <Col md="12" lg="12" className="leftDiv">
                                 <div className="">
                                    <div className="installation">Installation</div>                     
                                    <Col md="12" className="leftDiv">
                                       <div className="installation-steps">
                                          <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                          <div className="installation-box">
                                             <div>npm install react-chartjs-2 chart.js --save</div>
                                             <div>npm install --save reactstrap react react-dom</div>
                                          </div>
                                       </div>
                                    </Col>
                                 </div>                                      
                              </Col>                                                         
                           </Col>  
                           <Col md="12" lg="6" className="rightDiv">
                                 <CopyToClipboard text={lineareachart}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-code">Copy Code</span>
                                 </CopyToClipboard>
                                 <PrismCode
                                    component="pre"
                                    className="language-javascript"
                                 >
                                    {lineareachart}
                                 </PrismCode>                     
                           </Col>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
               <Row className="row-eq-height">
                  <Col sm="12">
                     <Card>
                        <CardBody>
                           <CardTitle>PIE Charts</CardTitle>
                           
                           <Col md="12" lg="6" className="leftDiv">
                              <Col md="12" lg="12" className="leftDiv">
                              <Pie height={400} data={PieData.data} options={PieData.options} />                                      
                              </Col>  
                              <Col md="12" lg="12" className="leftDiv">
                                 <div className="">
                                    <div className="installation">Installation</div>                     
                                    <Col md="12" className="leftDiv">
                                       <div className="installation-steps">
                                          <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                          <div className="installation-box">
                                             <div>npm install react-chartjs-2 chart.js --save</div>
                                             <div>npm install --save reactstrap react react-dom</div>
                                          </div>
                                       </div>
                                    </Col>
                                 </div>                                      
                              </Col>                                                         
                           </Col>  
                           <Col md="12" lg="6" className="rightDiv">
                                 <CopyToClipboard text={piecharts}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-code">Copy Code</span>
                                 </CopyToClipboard>
                                 <PrismCode
                                    component="pre"
                                    className="language-javascript"
                                 >
                                    {piecharts}
                                 </PrismCode>                     
                           </Col>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            

               {/*
                  <Col sm="12">
                     <Card>
                        <CardHeader>
                           <CardTitle>SCATTER CHART</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Scatter height={400} data={ScatterData.data} options={ScatterData.options} />
                        </CardBody>
                     </Card>
                  </Col>

               

                  <Col sm="12">
                     <Card>
                        <CardHeader>
                           <CardTitle>DOUGHNUT CHART</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Doughnut height={400} data={DoughnutData.data} options={DoughnutData.options} />
                        </CardBody>
                     </Card>
                  </Col>

                  <Col sm="12">
                     <Card>
                        <CardHeader>
                           <CardTitle>RADAR CHART</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Radar height={400} data={RadarData.data} options={RadarData.options} />
                        </CardBody>
                     </Card>
                  </Col>


                  <Col sm="12">
                     <Card>
                        <CardHeader>
                           <CardTitle>POLAR CHART</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Polar height={400} data={PolarData.data} options={PolarData.options} />
                        </CardBody>
                     </Card>
                  </Col>
               </Row> */}
            </Fragment>
   );
}
}

export default ChartJS;
