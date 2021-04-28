import React from 'react';
import { Container, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import './App.css';
import LoginView from './pages/LoginView';
import theme from './theme'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <LoginView></LoginView>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
