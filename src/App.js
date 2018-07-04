import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: {}
    };
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://github.com/ElForastero/react-challenge-sort-and-search/blob/master/public/js/data.json', true);

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200) {
        var xhrResponseText = xhr.responseText;
        console.log(xhrResponseText);
        var items = JSON.parse(xhrResponseText);
        this.setState({
          items: items
        });
      }
    })

    xhr.onerror = () => {
      console.log('error1');
    }

    xhr.send();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
