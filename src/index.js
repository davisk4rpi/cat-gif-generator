import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import Navbar from './components/navbar';
import Home from './containers/home';
import Gif from './containers/gif';
import './styles/main.scss';

// // old style
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);
// new style
const store = createStore(
  reducers,
  applyMiddleware(reduxThunk, promise)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div className="container">
        <Route path="/" component={Navbar} history={history} />
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <Switch>
              <Route path="/:id" component={Gif} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
