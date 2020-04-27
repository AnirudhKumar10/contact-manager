import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleDelete = (id, dispatch) => {
    /* axios
       .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res) => );
    */
   dispatch({ type: "DELETE_CONTACT", payload: id })
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="d-inline">{name}</h5>
                <i
                  onClick={this.handleClick}
                  className="fa fa-caret-down px-2"
                  style={{ fontSize: "20px" }}
                ></i>
                <i
                  onClick={this.handleDelete.bind(this, id, dispatch)}
                  className="fa fa-close float-right px-2"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
                <Link to={`/edit-contact/${id}`}>
                  <i
                    className="fa fa-pencil float-right px-2"
                    style={{ fontSize: "20px", color: "black" }}
                  ></i>
                </Link>
                <ul className="list-group" hidden={this.state.isToggleOn}>
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
