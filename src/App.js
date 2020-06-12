import React from 'react';
import './App.css';
import Home from './component/Home';
import MainPage from './component/MainPage'

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Home /> */}
          <MainPage />
        </header>
      </div>
    );
  }
}
export default App;
