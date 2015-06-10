'use strict';

var React = require('react');
var PlayerList = require('./components/player-list.jsx');
var request = require('superagent');

var App = React.createClass({
	
	getInitialState: function() {
		return{players: [], title: 'Players: '};
	},

	componentDidMount: function() {
		request
			.get('/api/players')
			.end(function(err, res) {
				if (err) return console.log(err);

				this.setState({players: res.body});
			}.bind(this)); //bind this in order to reference setState
	},

	render: function() {
		return (  
			<main>
				<h1>{this.state.title}</h1>
				<PlayerList data={this.state.players} />
			</main>
		)
	}
});

React.render(<App/>, document.body);