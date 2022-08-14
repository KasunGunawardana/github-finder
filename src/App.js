import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/sub-components/Search";
import Alert from "./components/sub-components/Alert";
import User from "./components/users/User";

import GithubContext from "./context/github/githubContext";

import About from "./pages/About";

import "./App.css";

const Global = {
  title: "Github finder",
  icon: "fab fa-github",
};

const App = () => {
  const githubContext = useContext(GithubContext);

  const { getUsers, users } = githubContext;

  const [alert, setAlert] = useState(null);

  const clearAlert = () => {
    setAlert(null);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Navbar title={Global.title} icon={Global.icon} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <div className="container">
                <Alert alert={alert} clearAlert={clearAlert} />
                <Search setAlert={showAlert} clearAlert={clearAlert} />
                <Users />
              </div>
            </>
          )}
        />
        <Route path="/about" exact component={About} />
        <Route path="/users/:login" render={(props) => <User {...props} />} />
      </Switch>
    </>
  );
};

export default App;
