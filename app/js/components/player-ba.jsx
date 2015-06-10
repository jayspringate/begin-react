'use strict';

var React = require('react');

//player ba component
module.exports = React.createClass({
	render: function() {
		return <li>
		{'BA: ' + this.props.data.ba}
		</li>
	}
});