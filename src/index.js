import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore';
import '../node_modules/alertifyjs/build/css/alertify.min.css';
import { BrowserRouter as Router } from "react-router-dom";




const store = configureStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>

  ,
  document.getElementById('root')
);


reportWebVitals();
