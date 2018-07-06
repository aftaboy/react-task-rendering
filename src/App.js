import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList'


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jqestate.ru/api/v1/properties/country', true);
    // xhr.open('GET', 'country.json', true);
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200) {
        var xhrResponseText = xhr.responseText;
        var data = JSON.parse(xhrResponseText);

        this.setState({
          data: data.items,
          renderedData: data.items.slice(0, 3),
          total: data.items.length
        });

        console.log(this.state.renderedData);
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
          <h1 className="App-title">React app for rendering objects</h1>
        </header>
        <div className="App-block">
          <ItemList data={this.state.data} />
        </div>



      </div>
    );    
  }
}

export default App;
