import React, { Component } from "react";
import { Consumer } from "../context";
import { v4 as uuidv4 } from "uuid";

export class Addcontact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: { name: "", email: "", phone: "" },
  };

  onsubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ error: { name: "Name is Required" } });
      return false;
    }

    if (email === "") {
      this.setState({ error: { email: "Email is Required" } });
      return false;
    }

    if (phone === "") {
      this.setState({ error: { phone: "Phone is Required" } });
      return false;
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };

    /*axios
      .post("https://jsonplaceholder.typicode.com/users")
      .then((res) => );
    */
   dispatch({ type: "ADD_CONTACT", payload: newContact })
    

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    });
  };

  onchangeValue = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h6>Add Contact</h6>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.onchangeValue}
                      placeholder="Enter Name.."
                    />
                    <span className="text-danger">{error.name}</span>
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.onchangeValue}
                      placeholder="Enter Email.."
                    />
                    <span className="text-danger">{error.email}</span>
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={this.onchangeValue}
                      placeholder="Enter Phone.."
                    />
                    <span className="text-danger">{error.phone}</span>
                  </div>
                  <button
                    className="btn btn-danger btn-block"
                    type="submit"
                    onClick={this.onsubmit.bind(this, dispatch)}
                  >
                    Add Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addcontact;
