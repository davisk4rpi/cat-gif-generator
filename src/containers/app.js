import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newGif } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.newGif();
  }

  render() {
    const { gif } = this.props;
    console.log(gif);
    return(
      <div>
        <img src={gif.fixed_height_downsampled_url} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { gif: state.gif };
}

export default connect(mapStateToProps, { newGif })(App);
