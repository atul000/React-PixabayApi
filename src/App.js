import React from 'react';
import Navbar from './component/navbar/Navbar';
import Search from './component/search/Search';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

function App() {
  return (
    <MuiThemeProvider>
    <div>

      <Navbar/><br/>
      <Search/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
