import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Notify from './components/Notify';
import Preferences from './components/Preferences';
import Main from './components/Main';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/root';

// Before you do any rendering, initialize the plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());


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
