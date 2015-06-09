'use strict';

var React = require('react');
var Player = require('./player.jsx');

module.exports = React.createClass({
	renderPlayers: function() {
		return this.props.data.map(function(player) {
			return <Player data={player} />
		});
	},
	render: function() {
		return (
			<ul>
				{this.renderPlayers()}
			</ul>
		)
	}
});