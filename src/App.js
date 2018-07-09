import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from './pagination';
// import ItemList from './ItemList';
import ItemData from './ItemData';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      renderedData: [],
      page: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const renderedData = this.state.data.slice((page - 1) * 3, (page - 1) * 3 + 3);
    this.setState({ page, renderedData });
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
          data: data.items.slice(0, 3),
          renderedData: data.items.slice(0, 3),
          total: data.items.length
        });
        // console.log(data);
      }
    })    
    

    xhr.onerror = () => {
      console.log('error1');
    }

    xhr.send();
  }



  render() {

    // const itemListJS = <ItemList data={this.state.data} />;

    const { page, total, renderedData } = this.state;

    const pagItemData = renderedData.map(items => <ItemData data={items} key={items.id} />);
    console.log(pagItemData);


    // const itemData = this.props.data.map((items) => <ItemData data={items} key={items.id} />);

    // console.log(renderedData);
    // console.log(page);    
    
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React app for rendering objects</h1>
        </header>

        <div className="App-block">
          {/* {itemListJS} */}
          {pagItemData}
        </div>


        <Pagination
          margin={3}
          page={page}
          count={Math.ceil(total / 3)}
          onPageChange={this.handlePageChange}
        />


      </div>
    );    
  }
}

export default App;
