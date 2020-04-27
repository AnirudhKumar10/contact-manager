import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Contactlist from "./components/Contactlist";
import Addcontact from "./components/Addcontact";
import About from "./components/About";
import Editcontact from "./components/Editcontact";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contactlist} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add-contact" component={Addcontact} />
              <Route exact path="/edit-contact/:id" component={Editcontact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
