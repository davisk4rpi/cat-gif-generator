import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newGif, findGifUrl, isLoading } from '../actions/index';

class GifComp extends Component {
  componentWillMount() {
    let { id } = this.props;
    this.props.findGifUrl(id);
  }

  componentWillReceiveProps(nextProps) {
    let { id } = nextProps;
    if (this.props.id != id) {
      nextProps.findGifUrl(id);
    }
  }

  handleClick() {
    // the first action 'isLoading' switches a boolean to true until the second
    // action is complete. This toggles the loading screen while the new API
    // request is resolving
    this.props.isLoading();
    this.props.newGif( (id) => {
      this.props.history.push(`/${id}`);
    }, this.props.tag, this.props.gifs);
  }

  render() {
    const { gifs } = this.props;
    // Renders a loading screen until a gif has loaded
    if ( !gifs.currentGif || gifs.isLoading){
      return (
        <div className="loading">Loading...</div>
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
          <button onClick={this.handleClick.bind(this)} className="btn btn-info btn-lg center-block" id="next-gif-btn">This gif is boring, I must have another</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { gifs, tag }) {
  return {
    gifs,
    tag
   };
}

export default connect(mapStateToProps, { newGif, findGifUrl, isLoading })(GifComp);
