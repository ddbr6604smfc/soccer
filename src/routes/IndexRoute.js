import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexRoute extends Component {
  render() {
    return (
      <div>
        <h1>Soccer app</h1>
        <Link to='/seasons'>Seasons</Link>
      </div>
    );
  }
}
