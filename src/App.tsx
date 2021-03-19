import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { EventForm } from './components/EventForm/EventForm';
import { Header } from './components/Header';
import { AppContentBox } from './components/styled/Box/AppContentBox';
import { BrowserRouter, Route } from 'react-router-dom';
import { SuccessScreen } from './components/SuccessScreen';
import { Provider } from 'react-redux';
import { store } from './store/reducer';

export interface ITheme {
  breakpoints: {
    iphone5: string;
    ipad: string;
  };
}

const defaultTheme: ITheme = {
  breakpoints: { 
    iphone5: '420px', 
    ipad: '768px',
  }
};

function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <Header title={"New Event"} />
          <AppContentBox>
            <BrowserRouter>
              <Route path="/" exact component={EventForm} />
              <Route path="/success-screen" component={SuccessScreen} />
            </BrowserRouter>
          </AppContentBox>
        </ThemeProvider>
      </div>
    </Provider>
    
  );
}

export default App;
