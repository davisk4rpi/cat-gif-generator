import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GifComp from '../components/gif_comp';

class Gif extends Component {
  render() {
    return(
      <div>
        <GifComp id={this.props.match.params.id} history={this.props.history} loaction={location}/>
      </div>
    )
  }
}

Gif = withRouter(Gif);
export default Gif;
