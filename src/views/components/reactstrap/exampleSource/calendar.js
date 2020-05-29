const CalendarSource = `
  class Calendarr extends React.Component {
    constructor() {
      super();
  
      this.state = {
        date: "28/5/2020",
      };
      this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(cDate) {
      const date =
        cDate.getDate() + "/" + cDate.getMonth() + "/" + cDate.getFullYear();
      this.setState({ date: date });
    }
    render() {
      return (
        <div>
          <div>DATE : {this.state.date}</div>
          <DatePicker onDateChange={this.onDateChange} date={new Date()} />
        </div>
      );
    }
  };`

export default CalendarSource;
