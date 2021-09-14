import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
//import { inc } from './actions/countAction';

const store = configureStore()
console.log(store)
console.log('state = ', store.getState())

store.subscribe(()=>{
  console.log('updated state = ', store.getState())
})
//store.dispatch(inc())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


