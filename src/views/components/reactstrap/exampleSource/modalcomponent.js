const ModalComponentSource = `
// import React from "react";
// import { ModalComponent } from "react-sonata-components-library";
class ModalComponentSource extends React.Component {
   render() {
      const Data = (props) => <div>This is div</div>;
      const doSomthingCallback = (props) => {
        console.log("dosomething");
      };
      return (
        <ModalComponent
          launchText="Launch modal"
          modalTitle="Modal title"
          bodyOfModal={<Data />}
          footerBtnOneCallback={doSomthingCallback}
          footerBtnOne="Do Something"
          footerBtnTwo="Cancel"
          onClose={doSomthingCallback}
        />
      );
   }
}
`;
export default ModalComponentSource;
