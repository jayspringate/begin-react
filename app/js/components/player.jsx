'use strict';

var React = require('react');

//player component
module.exports = React.createClass({
	render: function() {
		return <li>{this.props.data.player}</li>
	}
});