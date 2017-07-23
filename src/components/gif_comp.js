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
        <div className="row">
          <div className="col-xs-12">
            <img src={gifs.currentGif.url} className="center-block" id="gif" alt="This is a Gif"/>
          </div>
        </div>
        <div className="row">
          <button onClick={this.handleClick.bind(this)} className="btn btn-info btn-lg center-block" id="next-gif-btn">This cat is boring, I must have another</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

export default connect(mapStateToProps, { newGif, findGifUrl })(GifComp);
