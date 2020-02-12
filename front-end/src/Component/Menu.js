import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signOut, isAuthenticated } from "../Auth/index";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className='nav nav-tabs bg-primary'>
      <li className='nav-item'>
        <Link className='nav-link' style={isActive(history, "/")} to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, "/users")}
          to='/users'
        >
          Users
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to={`/post/create`}
          style={isActive(history, `/post/create`)}
        >
          Create Post
        </Link>
      </li>
      {!isAuthenticated() && (
        <>
          <li className='nav-item'>
            <Link
              className='nav-link'
              style={isActive(history, "/signin")}
              to='/signin'
            >
              Sign-In
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              style={isActive(history, "/signup")}
              to='/signup'
            >
              Sign-Up
            </Link>
          </li>
        </>
      )}

      {isAuthenticated() && (
        // eslint-disable-next-line
        <>
          <li className='nav-item'>
            <span
              className='nav-link'
              style={
                (isActive(history, "/signup"),
                { cursor: "pointer", color: "#fff" })
              }
              onClick={() => signOut(() => history.push("/"))}
              to='/signup'
            >
              Sign-Out
            </span>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link'
              to={`/user/${isAuthenticated().user._id}`}
              style={isActive(history, `/user/${isAuthenticated().user._id}`)}
            >
              {`${isAuthenticated().user.name}'s profile`}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to={`/findpeople`}
              style={isActive(history, `/findpeople`)}
            >
              Find People
            </Link>
          </li>
        </>
      )}
    </ul>
  </div>
);
export default withRouter(Menu);
