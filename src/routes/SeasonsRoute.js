import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  seasons: state.seasons,
});

export default connect(mapStateToProps)(SeasonsRoute);
