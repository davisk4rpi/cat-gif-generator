import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGif, updateTag } from '../actions/index';

class SearchBox extends Component {

  render() {
    return (
      <div>
        <form className="navbar-form navbar-right">
          <span className="navbar-text">Start typing to see different gifs</span>
          <div className="form-group">
            <input
              type="text"
              placeholder="funny cat"
              className="form-control"
              value={this.props.searchTerm}
              onChange={(event) => this.onInputChange(event.target.value)}
              />
          </div>
        </form>
      </div>
    );
  }

  onInputChange(term) {
    this.props.updateTag(term);
    this.props.newGif( (id) => {
      this.props.history.push(`/${id}`);
    }, term);
  }
}

function mapStateToProps ({ tag }) {
  return { tag };
};

export default connect(mapStateToProps, { newGif, updateTag })(SearchBox);
