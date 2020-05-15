const NoIconSource = `class NoIcon extends React.Component {
   render() {
      return (
         <div>
            <Switch
               id="customSwitch1"
               type="switch" 
               label="Turn on this custom switch"
               name="customSwitch1" 
               disabled={false}
            />
            <Switch
               id="customSwitch2"
               type="switch" 
               label="Disabled custom switch"
               disabled={true}
            />
         </div>
      );
   }
}`;

export default NoIconSource;
