import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newGif, findGifUrl } from '../actions/index';

class GifComp extends Component {
  componentWillMount() {
    const { id } = this.props;
    this.props.findGifUrl(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id != nextProps.id) {
      nextProps.findGifUrl(nextProps.id);
    }
  }

  handleClick() {
    this.props.newGif( (id) => {
      this.props.history.push(`/${id}`);
    });
  }

  render() {
    const { gifs } = this.props;
    if (!gifs.currentGif){
      return (
        <div>Loading...</div>
      );
    }
    return(
      <div>
        <img src={gifs.currentGif.url} />
        <button onClick={this.handleClick.bind(this)} className="btn btn-primary">New Gif</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

export default connect(mapStateToProps, { newGif, findGifUrl })(GifComp);
