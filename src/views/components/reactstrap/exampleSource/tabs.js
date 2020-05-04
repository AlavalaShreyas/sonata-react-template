
const TabsExampleSource=`
class TabsExampleSource extends React.Component {
   constructor() {
      super()
      this.state = {
         activeTab: "1"
      };
      this.toggle=this.toggle.bind(this);
    }
   toggle(tab){
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };
   
   render() {
      return (
         <div>
           <Tabss
          tabs={["HOLIDAYS", "CRUISES", "FLIGHTS"]}
          activeTab={this.state.activeTab}
          toggle={this.toggle}
        />
          <TabsContent activeTab={this.state.activeTab}>
          <TabsBody tabId="1"><strong>HOLIDAYS</strong> content</TabsBody>
          <TabsBody tabId="2"><strong>CRUISES</strong> content</TabsBody>
          <TabsBody tabId="3"><strong>FLIGHTS</strong> content</TabsBody>
        </TabsContent>   
         </div>
      );
   }
};`

export default TabsExampleSource;
