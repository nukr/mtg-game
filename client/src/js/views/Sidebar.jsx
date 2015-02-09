const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let Sidebar = React.createClass({
  render() {
    return(
      <div className="sidebar">
        <div className="review">
          <img src={this.props.review} alt="review" />
        </div>
      </div>
    )
  }
})

module.exports = Sidebar;
