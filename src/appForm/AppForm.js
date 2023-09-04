import React, { Component } from 'react';



class AppForm extends React.Component {
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
    return (
      <header>
        <div>
          <h2>Postgres :  API Call </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div>
          ID: {this.state.actor.actor_id} | FirstName: {this.state.actor.first_name} | LastName: {this.state.actor.last_name}
        </div>
      </header>

    );
  }
}

export default AppForm;