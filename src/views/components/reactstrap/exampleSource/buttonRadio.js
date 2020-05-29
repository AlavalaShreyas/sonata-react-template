const ButtonsRadioSource = `
class ButtonsRadioSource extends React.Component {
    constructor() {
        super()
        this.state = {
           activeButton: 1
        };
        this.toggle=this.toggle.bind(this);
      }
     toggle(radioButton){
        if (this.state.activeButton !== radioButton) {
           this.setState({
            activeButton: radioButton
           });
        }
     };
     
     render() {
        return (
            <ButtonsRadio
            radios = {["Cricket", "Badminton", "Chess"]}
            activeButton = {this.state.activeButton}
            toggle = {this.toggle}
            color = "primary"
            />    
        );
     }
};`
export default ButtonsRadioSource;

