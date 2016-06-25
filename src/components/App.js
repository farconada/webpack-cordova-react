import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';
import Tabs from './Tabs';

const App = () => (
    <MuiThemeProvider>
        <div>
            <AppBar />
            <Tabs />
        </div>
    </MuiThemeProvider>
);

export default App;
