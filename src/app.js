'use strict';

import React from 'react'; 
import createReactClass from 'create-react-class';
 

var Title = createReactClass({
	render:function(){
		return React.createElement('h1',null, 'Titulo');
	}
});


//ReactDOM.render(<App />, document.getElementById('app'));

export default Title;