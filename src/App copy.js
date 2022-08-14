import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/sub-components/Search";
import Alert from "./components/sub-components/Alert";
import User from "./components/users/User";

import About from "./pages/About";

import "./App.css";

class App extends Component {
  state = {
    app: {
      title: "Github finder",
      icon: "fab fa-github",
    },
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  clearAlert = () => {
    this.setState({ alert: null });
  };

  onSearch = async (search) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
      alert: null,
    });
  };

  getRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      user: res.data,
      loading: false,
    });
  };

  clearUsers = () => {
    this.setState({ users: [], alert: null });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data,
      loading: false,
    });
  }

  render() {
    const { users, user, loading, app, alert, repos } = this.state;

    return (
      <>
        <Navbar title={app.title} icon={app.icon} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <div className="container">
                  <Alert alert={alert} clearAlert={this.clearAlert} />
                  <Search
                    onSearch={this.onSearch}
                    clearUsers={this.clearUsers}
                    showClearBtn={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                    clearAlert={this.clearAlert}
                  />
                  <Users loading={loading} users={users} />
                </div>
              </>
            )}
          />
          <Route path="/about" exact component={About} />
          <Route
            path="/users/:login"
            render={(props) => (
              <User
                {...props}
                getUser={this.getUser}
                getRepos={this.getRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
