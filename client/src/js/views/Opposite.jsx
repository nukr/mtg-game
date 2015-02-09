const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let Opposite = React.createClass({
  clickHandler(){
    alert('hi');
  },
  renderCards(){
    return this.props.cards.map(function (card, index) {
      return <img onClick={this.clickHandler} src={card} key={index}/>
    }.bind(this));
  },
  render() {
    return(
      <div className="opposite">
        {this.renderCards()}
      </div>
    )
  }
})

module.exports = Opposite;

