const SelectSingleSource = `
//import React, { Component } from "react";
//import Select from "react-select";

class SingleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
    };
  }
  onSelectChanged(value) {
    this.setState({
      selectedOption: value,
    });
  }
  render() {
    const options = [
      { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
      { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
      { value: "purple", label: "Purple", color: "#5243AA" },
      { value: "red", label: "Red", color: "#FF5630", isFixed: true },
      { value: "orange", label: "Orange", color: "#FF8B00" },
      { value: "yellow", label: "Yellow", color: "#FFC400" }
    ];
    return (
      <Select
        options={options}
        className="basic-select"
        classNamePrefix="select"
        defaultValue={options[0]}
        name="colors"
        autoFocus={true}
        onChange={this.onSelectChanged.bind(this)}
      />
    );
  }
}
`;

export default SelectSingleSource;