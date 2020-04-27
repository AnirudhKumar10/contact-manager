import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "Peter Parker",
        email: "peter@yahoo.com",
        phone: "00-7777-7777",
      },
      {
        id: "2",
        name: "Tony Stark",
        email: "tony@yahoo.com",
        phone: "11-7777-7777",
      },
      {
        id: "3",
        name: "Jhonny Blaze",
        email: "jhonny@gmail.com",
        phone: "11-8888-8888",
      },
      {
        id: "4",
        name: "Steve Rogers",
        email: "steve@yahoo.com",
        phone: "99-6969-6969",
      },
      {
        id: "5",
        name: "Natasha Banner",
        email: "banner@yahoo.com",
        phone: "98-9898-6868",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  //  componentDidMount() {
  //    axios.get('https://jsonplaceholder.typicode.com/users')
  //    .then(res => this.setState({contacts: res.data}))
  //  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
