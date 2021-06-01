import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


let defaultState = {
    bitrhModal : true,
    favModal : true,
    recommModal : true,
    channModal : true,
    friendsModal : true,
  };

function reducer(state = defaultState, actions){
  if (actions.type === 'birthModal') {
    return (state.bitrhModal = !state.bitrhModal)
  } else if (actions.type === 'favModal') {
    return (state.favModal = !state.favModal)
  } else if (actions.type === 'recommModal') {
    return (state.recommModal = !state.recommModal)
  } else if (actions.type === 'channModal') {
    return (state.channModal = !state.channModal)
  } else if (actions.type === 'friendsModal') {
    return (state.friendsModal = !state.friendsModal)
  }
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
