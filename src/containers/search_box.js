import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGif } from '../actions/index';

class SearchBox extends Component {

  render() {
    return (
      <div>
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <input
              type="text"
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
    this.props.newGif( (id) => {
      this.props.history.push(`/${id}`);
    });
  }
}

function mapStateToProps ({ searchTerm }) {
  return { searchTerm };
};

export default connect(mapStateToProps, { newGif })(SearchBox);
