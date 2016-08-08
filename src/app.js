import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Notify from './components/Notify';
import Preferences from './components/Preferences';
import Main from './components/Main';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';
import firebase from 'firebase';

// Before you do any rendering, initialize the plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Main} />
                    <Route path="/push" component={Notify}/>
                    <Route path="/prefs" component={Preferences}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));


    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-qS0Fn6_Cdvt1DkYFMts4yafR-jaDzxk",
    authDomain: "prueba1-fdf98.firebaseapp.com",
    databaseURL: "https://prueba1-fdf98.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var databaseref = firebase.database().ref();
  databaseref.on('value', function(dataSnapshot) {
    console.log(dataSnapshot);
  });
