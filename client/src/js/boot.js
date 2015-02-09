const React = require('react');
const Main = React.createFactory(require('./views/Main.jsx'));
const css = require('../less/style.less');

React.render(Main(), document.getElementById('react'));
