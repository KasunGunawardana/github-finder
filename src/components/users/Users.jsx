import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

import Spinner from "../sub-components/Spinner";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles} className="grid-3">
        {users.map((user) => (
          <UserItem
            key={user.id}
            name={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
    );
  }
};

const userStyles = {
  // display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',
  // gridGap: '1rem'
};

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

export default Users;
