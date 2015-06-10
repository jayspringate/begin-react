'use strict';

var React = require('react');

//player name component
module.exports = React.createClass({
	render: function() {
		return <li>
		{'Name: ' + this.props.data.name}
		</li>
	}
});