/** @jsx React.DOM */
var React = require('react');
var KidDetailsComponet = React.createClass({
  render:function(){

    return (
    <div class="thumbnail">
     <img src="http://www.cliparthut.com/clip-arts/79/cartoon-boy-face-79740.png" alt="..."/>
     <div class="caption">
       <h3>Thumbnail label</h3>
       <p>...</p>
       <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
     </div>
   </div>
  )
  }
});

module.exports=KidDetailsComponet
