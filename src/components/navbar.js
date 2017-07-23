import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <strong className="navbar-brand">Cat Gifs!</strong>
        </div>
        <div>
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
