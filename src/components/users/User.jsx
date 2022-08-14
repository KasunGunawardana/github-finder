import React, { useEffect, useContext } from "react";
import Spinner from "../sub-components/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, getRepos, repos, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={name}
              className="round-img"
              style={{ width: "100px", marginBottom: "10px" }}
            />
            <h1>{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a
              href={html_url}
              target="_blank"
              className="btn btn-dark btn-sm"
              style={{ margin: "8px 0" }}
            >
              View Github Profile
            </a>
            <hr />
            <ul style={{ fontSize: "0.9rem" }}>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <div className="card">
          <Repos repos={repos} />
        </div>
      </div>
    );
  }
};

// User.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   user: PropTypes.object.isRequired,
// };

export default User;
