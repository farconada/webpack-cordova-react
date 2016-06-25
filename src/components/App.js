import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';

const App = () => (
    <MuiThemeProvider>
        <AppBar />
    </MuiThemeProvider>
);

export default App;
