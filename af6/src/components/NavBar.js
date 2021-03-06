import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../actions';

const NavBar = ({ loggedIn, logout, role }) => {
  const { push } = useHistory();
  const handleLogout = () => {
    logout();
    push('/');
  };

  return (
    <Nav>
      <h1>Anywhere Fitness</h1>
      <nav>
        <ul>
          {!loggedIn && (
            <Link to='/'>
              <p>Home</p>
            </Link>
          )}

          {role === 'instructor' && (
            <Link to='/instructor'>
              <p>Classes</p>
            </Link>
          )}
          {role === 'client' && (
            <Link to='/user'>
              <p>Your Classes & Add More</p>
            </Link>
          )}
          {!loggedIn && (
            <Link to='signup'>
              <p>SignUp</p>
            </Link>
          )}
          {!loggedIn && (
            <Link to='/login'>
              <p>Log In</p>
            </Link>
          )}
          {loggedIn && (
            <Link onClick={handleLogout}>
              <p>Log Out</p>
            </Link>
          )}
          <Link to='/about'>
            <p>About Us</p>
          </Link>
        </ul>
      </nav>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.isLoggedIn,
    role: state.user.user.role,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);

// Styled component styling

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  // border-bottom: 3px solid #fd5549;
  border-bottom: 30px solid black;
  background-color: #fdffff;

  h1 {
    // color: #fd5549;
    color: black;
    text-shadow: 2px 2px 1px lightblue;
  }
  a {
    text-decoration: none;
  }
  nav {
    width: 30%;
    margin-top: 1%;
  }
  p::selection,
  // h1::selection {
  //   color: #474350;
  //   text-shadow: 2px 2px #fd5549;
  // }
  ul {
    display: flex;
    justify-content: space-between;
  }

  p {
    // color: #fd5549;
    color: yellow;
    background-color: black;
    border: 2px solid lightblue;
    padding: 3px;
    text-shadow: 1.5px 1.5px black;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
