/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/*REDUX*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
/*CSS*/
import './index.css';
/*CONTAINERS*/
import App from './containers/App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



const store = createStore(reducers);





ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

        <Route exact path="/" component={App}/>

      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
