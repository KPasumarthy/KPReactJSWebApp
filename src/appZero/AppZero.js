import React, { Component } from 'react';
import logo from './logo.svg';
import './AppZero.css';



class AppZero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsActors: [],
      customers: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    // // // //KP  : MongoDB
    // fetch('http://localhost:2727/mongodbnosqlapi/customersAgeSorted')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json,
    //     })
    //   });

    // // //KP  : Postgres
    fetch('http://localhost:2345/postgres/api/dvdrental/getFirst10Actors')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          itemsActors: json,
        })
      });
  }

  render() {

    //KP : React Class-level variables
    const name = 'Kailash';
    const element = <h1>Hello World : {name} - ReactJS</h1>


    //KP : Items from API calls
    var { isLoaded, items, itemsActors } = this.state;


      return (
        <div className="AppZero">
          <header className="AppZero-header">
            {element}
            <img src={logo} className="AppZero-logo" alt="logo" />
            <p>
              Edit <code>src/AppZero.js</code> and save to reload.
            </p>
            <a
              className="AppZero-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <h2>Postgres :  API Call </h2>
            <ul>
              {
                itemsActors.map(item => (
                  <li key={item.actor_id}>
                    ID: {item.actor_id} | FirstName: {item.first_name} | LastName: {item.last_name}
                  </li>
                ))
              }
            </ul>


            {/* <h2>MongoDB :  API Call </h2>
            <ul>
              {
                items.map(item => (
                  <li key={item._id}>
                    FirstName: {item.first_name} | LastName: {item.last_name}
                  </li>
                ))
              }
            </ul> */}

          </header>

        </div>
      );

      
  }
}

export default AppZero;
