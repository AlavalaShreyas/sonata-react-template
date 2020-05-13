const SpinnerSingleSource = `
class SpinnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div>
        <ClipLoader
          className="clip-loader"
          sizeUnit={"px"}
          size={30}
          color={"#FF586B"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

`;

export default SpinnerSingleSource;