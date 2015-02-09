const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let Player = React.createClass({
  clickHandler(card, event){
    action.cast(card)
  },
  mouseEnterHandler(card, event){
    action.review(card);
  },
  renderCards(){
    return this.props.cards.map(function (card, index) {
      return (
        <img
          onMouseEnter={this.mouseEnterHandler.bind(null, card)}
          onClick={this.clickHandler.bind(null, card)}
          src={card}
          key={index}
        />
      )
    }.bind(this));
  },
  render() {
    return(
      <div className="player">
        {this.renderCards()}
      </div>
    )
  }
})

module.exports = Player;

