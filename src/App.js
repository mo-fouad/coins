import React, { Component } from 'react';
import styled from 'styled-components';
import Tickers from './components/Tickers'
const Header = styled.div`
  background: #eee;
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
  font-size:18px;
  padding: 20px;
`
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header  className="App-header">
          <h2>Cryptocurrency converter 
          </h2>
        </Header>
        <Tickers></Tickers>
      </div>
    );
  }
}

export default App;
