import React, { Component, PropTypes } from 'react';

class SeasonsRoute extends Component {
  static propTypes = {
    seasons: PropTypes.array.isRequired,
  };

  render() {
    return (
      <ul>
        {
          this.props.seasons.map(season =>
            <li key={season.league}>
              <p>{season.caption}</p>
            </li>
          )
        }
      </ul>
    );
  }
}
