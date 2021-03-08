import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      customers: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('http://localhost:2727/mongodbnosqlapi/customersAgeSorted')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  }

  render() {

    //KP : React Class-level variables
    const name = 'Kailash';
    const element = <h1>Hello World : {name} - ReactJS</h1> 

    //KP : Items from API calls
    var { isLoaded, items } = this.state;

    if (!isLoaded){
      return (
        <div className="App">        
          <header className="App-header">
            {element}
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              LOADING ....
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }else{
      return (
        <div className="App">        
          <header className="App-header">
            {element}
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <h2>MongoDB :  API Call </h2>
            <ul>
              {
                items.map(item => (
                  <li key={item._id}>
                      FirstName: {item.first_name} | LastName: {item.last_name}
                  </li>
                ))
              }
            </ul>

          </header>

        </div>
      );

    }
  }
}

export default App;
