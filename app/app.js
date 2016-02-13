import React from "react";
import ReactDom from "react-dom";
import _ from "underscore";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, Link, History } from "react-router"
import createBrowserHistory from 'history/lib/createBrowserHistory'

require('./css/style.scss');

var Home = React.createClass({
  render() {
    return (
      <h2>Home</h2>
    )
  }
});

var About = React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>
        {this.props.children}
      </div>
    );
  }
});

var Nested = React.createClass({
  render() {
    return (
      <p>Nested content.</p>
    )
  }
});

var App = React.createClass({
  componentDidMount: function(){
    _.each([1,2,3], function(num){ 
      console.log(num); 
    });
  },
  render: function(){
    var self = this;
    return (
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/nested">About &raquo; Nested</Link></li>
        </ul>
        {self.props.children}
      </div>
    );
  }
});

ReactDom.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}>
        <Route path="nested" component={Nested} />
      </Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
