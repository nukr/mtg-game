const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let PlayerBattleField = React.createClass({
  clickHandler(event){
    event.target.style.transform = 'rotate(90deg)';
  },

  renderCards(){
    return this.props.cards.map(function (card, index) {
      return (
        <img
          onClick={this.clickHandler}
          src={card}
          key={index}
        />
      )
    }.bind(this));
  },

  render() {
    return(
      <div className="player-battlefield">
        {this.renderCards()}
      </div>
    )
  }
})

module.exports = PlayerBattleField;

