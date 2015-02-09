const React = require('react');
const OppoBattleField = require('./OppoBattleField.jsx');
const PlayerBattleField = require('./PlayerBattleField.jsx');
const Opposite = require('./Opposite.jsx');
const Player = require('./Player.jsx');
const action = require('../actions/AppActionCreator');
const Sidebar = require('./Sidebar.jsx');
const store = require('../stores/SimpleStore');

function getTruth() {
  return store.getTruth();
}

let Main = React.createClass({
  getInitialState(){
    return getTruth();
  },

  componentDidMount(){
    store.addChangeListener(this.change);
  },

  componentWillUnmount(){
    store.removeChangeListener(this.change);
  },

  change() {
    this.setState(getTruth());
  },

  render() {
    return(
      <div className="main">
        <Opposite cards={this.state.oppositeHand} />
        <OppoBattleField />
        <PlayerBattleField />
        <Player cards={this.state.playerHand} />
        <Sidebar review={this.state.review} />
      </div>
    )
  }
})

module.exports = Main;
