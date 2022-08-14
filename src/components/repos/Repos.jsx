import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      <h3 style={{ marginBottom: "5px" }}>Recent Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </ul>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
