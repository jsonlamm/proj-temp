// comp main

import React, {Component} from 'react';

import { Link } from 'react-router';

// comments below will mess up
class Main extends Component {
  // same as: const Main = React.createClass({})
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Main comp!</Link>
        </h1>
        <h4>
          <Link to="/campus/">Campus link</Link>
        </h4>
        <h4>
          <Link>Students link</Link>
        </h4>
        <h4>Another link</h4>

      </div>
    )
  }
}

export default Main;

        // { React.cloneElement(this.props.children, this.props) }