const InputGroupSource = `class InputBoxExample extends React.Component {
   render() {
      return (
         <InputBox
        id="exampleEmail"
        type="email" 
        name="email" 
        placeholder="placeholder"
        bsSize="md"
        valid= {false}
        invalid={false}
        disabled={false}
    />
      );
   }
}`;

export default InputGroupSource;