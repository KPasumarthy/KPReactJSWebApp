import React, { Component } from 'react';



class AppGetAllActors extends Component {

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
    let heading = ['ID', 'First Name', 'Last Name', 'Time Stamp'];


    return (
      <div >
        <Table heading={heading} itemsActors={itemsActors} />,
      </div>
    );


  }
}

class Table extends Component {
  render() {

    console.log(this.props.itemsActors);
    let heading = this.props.heading;
    let itemsActors = this.props.itemsActors;
    return (

          <div >

            <h2>Postgres : API Call : GET All Actors </h2>


            <table style={{ width: 500 }} align='center'>
              <thead>
                <tr>
                  {heading.map((head, headID) =>
                    <th key={headID} >{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {itemsActors.map(item =>
                  <TableRow rowContent={[item.actor_id, item.first_name, item.last_name, item.last_update]} key={item.actor_id} />)}
              </tbody>
            </table>


          </div>


    );
  }
}

class TableRow extends Component {
  render() {
    let row = this.props.rowContent;
    return (
      <tr>
        {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
      </tr>
    )
  }
}



export default AppGetAllActors;
