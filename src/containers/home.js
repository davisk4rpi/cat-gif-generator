import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gif from './gif';

import { newGif, findGif } from '../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.newGif( (id) => {
      this.props.history.push(`/${id}`);
    });
  }

  render() {
    const { gifs } = this.props;
      return (
        <div>Loading...</div>
      );
  }
}

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

export default connect(mapStateToProps, { newGif })(Home);
