'use strict';

var React = require('react');
var PlayerName = require('./player-name.jsx');
var PlayerBa = require('./player-ba.jsx');

module.exports = React.createClass({
	renderPlayers: function() {
		return this.props.data.map(function(player) {
			return <section key={player._id}>
						 <PlayerName data={player}/>
						 <PlayerBa data={player}/>
						 </section>
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