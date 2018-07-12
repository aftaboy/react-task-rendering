import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from './pagination';
import ItemData from './ItemData';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      renderedData: [],
      dataPerPage: 4,
      page: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data.json', true);
    // xhr.open('GET', 'https://jqestate.ru/api/v1/properties/country', true);
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200) {
        var xhrResponseText = xhr.responseText;
        var data = JSON.parse(xhrResponseText);

        this.setState({
          data: data.items,
          renderedData: data.items.slice(0, this.state.dataPerPage),
          total: data.items.length
        });
      }
    })    

    xhr.onerror = () => {
      alert('No objects');
    }

    xhr.send();
  }

  handlePageChange(page) {
    const renderedData = this.state.data.slice((page - 1) * this.state.dataPerPage, (page - 1) * this.state.dataPerPage + this.state.dataPerPage);
    this.setState({ page, renderedData });
  }

  render() {
    const { page, total, renderedData, dataPerPage } = this.state;

    const pagItemData = renderedData.map(item => <ItemData data={item} key={item.id} />);
    
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React app for rendering objects</h1>
        </header>

        <div className="App-block">
          {pagItemData}
        </div>

        <Pagination
          margin={3}
          page={page}
          count={Math.ceil(total / dataPerPage)}
          onPageChange={this.handlePageChange}
        />

      </div>
    );    
  }
}

export default App;
