const ReactTableSource = `
 class ReactTable extends React.Component {
  constructor() {
     super();
     this.state = {
     };
  }
  render() {
     return (
        <div>
        <Table
        data={tableData}
        columns={columns}
        defaultPageSize={5}
        className={'-striped -highlight'}
        style={{textAlign:'center'}}
      />
        </div>
     );
  }
}
`;

export default ReactTableSource;