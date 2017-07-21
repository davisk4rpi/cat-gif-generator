import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newGif, findGif } from '../actions/index';

class App extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    if (!id){
      this.props.newGif();
    } else {
      this.props.findGif(id);
    }
  }

  render() {
    if (!this.props.gif){
      return (
        <div>Loading...</div>
      );
    }
    const { gif } = this.props;
    console.log(gif);
    return(
      <div>
        <img src={gif.chosenUrl} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { gif: state.gif };
}

export default connect(mapStateToProps, { newGif, findGif })(App);
