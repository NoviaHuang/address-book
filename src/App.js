import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListAddress from './Component/ListAddress.js';

class App extends Component {
  state = {
    "address": [
      { "FirstName": "Cathy",
        "LastName": "Pierce",
        "Birthday": "9/14/1996",
        "Telephone": "00-910-8132"
      },
      {
        "FirstName": "Alfonso",
        "LastName": "Cooley",
        "Birthday": "8/10/1973",
        "Telephone": "200-657-9362"
      },
      {
        "FirstName": "Victor",
        "LastName": "Gordon",
        "Birthday": "8/3/1970",
        "Telephone": "200-661-9407"
      },
      {
        "FirstName": "Colleen",
        "LastName": "Wright",
        "Birthday": "10/28/1967",
        "Telephone": "200-250-7949"
      },
      {
        "FirstName": "James",
        "LastName": "Johnston",
        "Birthday": "5/11/1972",
        "Telephone": "200-645-3176"
      },
      {
        "FirstName": "Anna",
        "LastName": "Reyes",
        "Birthday": "9/10/1975",
        "Telephone": "200-707-8670"
      }
    ],
    "formFirstName": " ",
    "formLastName": " ",
    "formBirthday": " ",
    "formTelephone": " "
  }

  addAddressHandler = (event) => {
    event.preventDefault();
    let newAddress = {
      FirstName: this.state.formFirstName,
      LastName: this.state.formLastName,
      Birthday: this.state.formBirthday,
      Telephone: this.state.formTelephone
    };
    
    this.setState({address:[...this.state.address, newAddress]});
    this.setState({formFirstName: " "});
    this.setState({formLastName: " "});
    this.setState({formBirthday: " "});
    this.setState({formTelephone: " "});
  }

  deleteAddressHandler = (FirstName, LastName, event) => {
    let address = [...this.state.address];
    let deleteIndex = address.findIndex((item)=>((item[FirstName] === FirstName) && (item[LastName] === LastName)));
    address.splice(deleteIndex, 1);
    this.setState({address: address});
  }

  render() {
    return (
      <div className="App">
        <container>
          <header className="App-header text-center">
            <h1>Address Book</h1>
          </header>
          <ListAddress
            address={this.state.address}
            delete={this.deleteAddressHandler}>
          </ListAddress>
          <h2 className="text-left">Add a new contact</h2>
          <form className="text-left" onSubmit={this.addAddressHandler}>
            <Form.Group controlId="formAddress">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={this.state.formFirstName}
                onChange={(e) => this.setState({formFirstName: e.target.value})}/>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={this.state.formLastName}
                onChange={(e) => this.setState({formLastName: e.target.value})}/>
                <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter birthday"
                value={this.state.formBirthday}
                onChange={(e) => this.setState({formBirthday: e.target.value})}/>
                <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter telephone number"
                value={this.state.formTelephone}
                onChange={(e) => this.setState({formTelephone: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
          </form>
        </container>
      </div>
    );
  }
}

export default App;

