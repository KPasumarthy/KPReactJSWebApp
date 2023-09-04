import React, { Component } from 'react';



class AppGetActor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemsActors: [],
      actor: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const getUrl = 'http://localhost:2345/postgres/api/dvdrental/getActor/' + this.state.value;
    console.log(getUrl);

    // // // //KP  : Postgres
    fetch(getUrl)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ actor: json });
      });

  }


  render() {

    //KP : React Class-level variables
    const name = 'Kailash';
    const element = <h1>Hello World : {name} - ReactJS</h1>


    //KP : Items from API calls
    var { isLoaded, items, actor } = this.state;
    let heading = ['ID', 'First Name', 'Last Name', 'Time Stamp'];


    return (
      <div>
        <div>
        <h2>Postgres :  API Call : GET Actor</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              ID:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
       
          ID: {this.state.actor.actor_id} | FirstName: {this.state.actor.first_name} | LastName: {this.state.actor.last_name}

        </div>


        <div >
          <Table heading={heading} actor={actor} />,
        </div>
      </div>
    );


  }
}

class Table extends Component {
  render() {

    console.log(this.props.actor);
    let heading = this.props.heading;
    let actor = this.props.actor;
    return (

      <div  align='center'>

        <h2>Postgres : API Call : GET Actor </h2>

        <table style={{ width: 500 }} align='center'>
          <thead>
            <tr>
              {heading.map((head, headID) =>
                <th key={headID} >{head}</th>)}
            </tr>
          </thead>
          <tbody>
              <TableRow rowContent={[actor.actor_id, actor.first_name, actor.last_name, actor.last_update]} key={actor.actor_id} />
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



export default AppGetActor;
