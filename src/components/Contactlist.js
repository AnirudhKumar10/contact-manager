import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export class Contactlist extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="card">
                <div className="card-header">Contact List</div>
                <div className="card-body">
                  {contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contactlist;
