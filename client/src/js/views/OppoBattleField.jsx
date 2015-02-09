const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let OppoBattleField = React.createClass({
  clickHandler(event){
    event.target.style.transform = 'rotate(90deg)';
  },

  render() {
    return(
      <div className="oppo-battlefield">
      </div>
    )
  }
})

module.exports = OppoBattleField;

