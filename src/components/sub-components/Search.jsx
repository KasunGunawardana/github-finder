import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert, clearAlert }) => {
  const githubContext = useContext(GithubContext);

  const { users, searchUsers, clearUsers } = githubContext;

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(search);
      setSearch("");
    }
  };

  const onInputChange = (e) => {
    clearAlert();
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search Users..."
          value={search}
          onChange={onInputChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
  clearAlert: PropTypes.func.isRequired,
};

export default Search;
