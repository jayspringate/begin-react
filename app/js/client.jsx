'use strict';

var React = require('react');
var PlayerList = require('./components/player-list.jsx');

var App = React.createClass({
	render: function() {
		return (  
			<main>
				<h1>{this.props.title}</h1>
				<PlayerList data={[{player: 'Matt Wieters'}]} />
			</main>
		)
	}
});

React.render(<App title='Players' />, document.body);