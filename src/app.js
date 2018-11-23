'use strict';

var React = require('react'); 
var createReactClass = require('create-react-class');

console.log('ye');

var Title = createReactClass({
	render:function(){
		return React.createElement('h1',null, 'Titulo');
	}
});


//ReactDOM.render(<App />, document.getElementById('app'));

module.exports = Title;