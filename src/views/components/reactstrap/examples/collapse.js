// import React, { useState } from "react";
// import { Collapse, Button, CardBody, Card } from "reactstrap";

// const CollapseComponent = ({
//   color = "primary",
//   buttonText = "Toggle",
//   cardText = "This is the card body text"
// }) => {
//   const[isCollapse, setCollapse] = useState(false);
//   const toggle = () => {
//     setCollapse(!isCollapse);
//   };
//   return(
//     <div>
//       <Button
//         color={color}
//         onClick={toggle}
//         style={{ marginBottom: "1rem" }}
//       >
//         {buttonText}
//       </Button>
//       <Collapse isOpen={isCollapse}>
//         <Card>
//           <CardBody>
//             {cardText}
//           </CardBody>
//         </Card>
//       </Collapse>
//     </div>
//   );

// };
// export default CollapseComponent;
