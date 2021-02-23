import React, { Component } from 'react'
import './App.css';
import contacts from "./contacts.json";

export default class App extends Component {
  state = {
    contact: contacts.slice(0, 5),
  };

  handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomContact = contacts[randomIndex];

    this.setState({
      contact: [...this.state.contact, randomContact],
    });
  };

  handleSort = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contact));

    clonedContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contact: clonedContacts,
    });
  };

  handleSortPop = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contact));

    clonedContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contact: clonedContacts,
    });
  };



  handleDelete = (studentId) => {
    let filteredContacts = this.state.contact.filter((singleContact) => {
      return singleContact.id !== studentId
    })

    this.setState({
      contact: filteredContacts
    });
  }







  render() {
    return (
      <div className="contacts">
        <h1>IronContacts</h1>
        <button onClick={this.handleAdd}>Add Random Contact</button>
        <button onClick={this.handleSort}>Sort by name</button>
        <button onClick={this.handleSortPop}>Sort by popularity</button>
        <div className="mainDes">
          <h1>Picture</h1>
          <h1>Name</h1>
          <h1>Popularity</h1>
          <h1>Action</h1>
        </div>
        {this.state.contact.map((singleContact) => {
          return (
            <table>
              <img width="130" height="200" src={singleContact.pictureUrl} />
              <h2>{singleContact.name}</h2>
              <h2>{singleContact.popularity.toFixed(2)}</h2>
              <button onClick={()=>{this.handleDelete(singleContact.id);}}>Delete</button>
            </table>
          );
        })}
      </div>
    );
  }
}
