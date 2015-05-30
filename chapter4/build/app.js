/** @jsx React.DOM */
var KidsDetailsComponent =  require('components/kid_details_component.js');
var App = React.createClass({displayName: "App",
  render:function(){
    return (
      React.createElement(KidsDetailsComponent, null)
    )
  }
});

React.render(React.createElement(App, null), document.getElementById("app"));
