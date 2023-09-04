import React, { Component } from 'react';



class AppTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsActors: [],
      customers: [],
      isLoaded: false,
    }
  }


  render() {

    //KP : React Class-level variables
    const name = 'Kailash';
    const element = <h1>Hello World : {name} - ReactJS</h1>


    //KP : Items from API calls
    var { isLoaded, items, itemsActors } = this.state;
    let heading = ['Name', 'City', 'Course'];
    let body =
      [['Kapil', 'Jaipur', 'MCA'],
      ['Aakash', 'Hisar', 'Btech'],
      ['Mani', 'Ranchi', 'MSc'],
      ['Yash', 'Udaipur', 'Mtech']
      ];



    return (
      <div >
        <Table heading={heading} body={body} />,
      </div>
    );


  }
}

class Table extends Component {
  render() {
    let heading = this.props.heading;
    let body = this.props.body;
    return (
      <table style={{ width: 500 }} align='center'>
        <thead>
          <tr>
            {heading.map((head, headID) =>
              <th key={headID} >{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) =>
            <TableRow rowContent={rowContent} key={rowID} />)}
        </tbody>
      </table>
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



export default AppTable;
