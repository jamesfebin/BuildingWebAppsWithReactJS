/** @jsx React.DOM */
var KidsDetailsComponent =  require('components/kid_details_component.js');
var App = React.createClass({
  render:function(){
    return (
      <KidsDetailsComponent />
    )
  }
});

React.render(<App />, document.getElementById("app"));
