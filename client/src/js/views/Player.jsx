const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let Player = React.createClass({
  clickHandler(){
    console.log('click');
  },
  mouseEnterHandler(card, event){
    action.review(card);
  },
  mouseLeaveHandler(){
    console.log('leave');
  },
  renderCards(){
    return this.props.cards.map(function (card, index) {
      return (
        <img
          onMouseEnter={this.mouseEnterHandler.bind(null, card)}
          onMouseLeave={this.mouseLeaveHandler.bind(null, card)}
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

