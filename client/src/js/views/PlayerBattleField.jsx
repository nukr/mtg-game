const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let PlayerBattleField = React.createClass({
  clickHandler(event){
    event.target.style.transform = 'rotate(90deg)';
  },

  render() {
    return(
      <div className="player-battlefield">
      </div>
    )
  }
})

module.exports = PlayerBattleField;

