/** @jsx React.DOM */
var React = require('react');
var KidDetailsComponet = React.createClass({displayName: "KidDetailsComponet",
  render:function(){

    return (
    React.createElement("div", {class: "thumbnail"}, 
     React.createElement("img", {src: "http://www.cliparthut.com/clip-arts/79/cartoon-boy-face-79740.png", alt: "..."}), 
     React.createElement("div", {class: "caption"}, 
       React.createElement("h3", null, "Thumbnail label"), 
       React.createElement("p", null, "..."), 
       React.createElement("p", null, React.createElement("a", {href: "#", class: "btn btn-primary", role: "button"}, "Button"), " ", React.createElement("a", {href: "#", class: "btn btn-default", role: "button"}, "Button"))
     )
   )
  )
  }
});

module.exports=KidDetailsComponet
