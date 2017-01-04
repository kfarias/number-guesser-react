const React = require('react');
const ReactDOM = require('react-dom');
import Application from './Application';


require('./scss/reset.scss');
require('./scss/style.scss');
require('./scss/variables.scss');

ReactDOM.render(<Application/>, document.getElementById('Application'));
