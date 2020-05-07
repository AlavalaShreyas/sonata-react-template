const toastrPositionsSource = `

class ToastrPositions extends React.Component {
   render() {
      return (
         <Toaster
         buttonText="Launch Toaster"
         buttonType="primary"
         className="success my-2 rounded"
         toastrType="success"
         toastrHeaderText="Toaster HeaderText"
         toastrMessageText="This is a toast message — check it out!"
         />
      );
   }
}`;

export default toastrPositionsSource;