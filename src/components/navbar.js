import React from 'react';
import SearchBox from '../containers/search_box';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <strong className="navbar-brand">Cat Gifs!</strong>
        </div>
        <SearchBox history={props.history} />
      </div>
    </nav>
  );
};

export default Navbar;
