import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './Titlebar.js';
import {orange500} from 'material-ui/styles/colors';
import Card, {CardHeader} from './Cardcoin.js';


const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: orange500,
  },
});


class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar title="Cryptocurrency"/>
            <Card />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
