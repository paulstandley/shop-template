import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import styled from 'styled-components';

const Navigation = () => (
  <Nav>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </Nav>
);

const NavigationAuth = () => (
  <Ul>
    <Li>
      <Link to={ROUTES.LANDING}>SHOP</Link>
    </Li>
    <Li>
      <Link to={ROUTES.STORE}>STORE</Link>
    </Li>
    <Li>
      <Link to={ROUTES.HOME}>HOME</Link>
    </Li>
    <Li>
      <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>
    </Li>
    <Li>
      <Link to={ROUTES.ADMIN}>ADMIN</Link>
    </Li>
    <Li>
      <SignOutButton />
    </Li>
  </Ul>
);

const NavigationNonAuth = () => (
  <Ul>
    <Li>
      <Link to={ROUTES.LANDING}>LANDING</Link>
    </Li>
    <Li>
      <Link to={ROUTES.STORE}>STORE</Link>
    </Li>
    <Li>
      <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
    </Li>
  </Ul>
);

const Nav = styled.nav`
  background-image: var(--navgrad);
`;

const Ul = styled.ul`
  background: var(--navbg);
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  background: transparent;
  padding: 1rem;
  :hover {
    background: white;
  }
  a {
    color: var(--navcolor);
    text-decoration: none !important;
    font-size: 2rem;
  }
  a:hover {
    font-size: 2rem;
    color: blue;
  }
`;

export default Navigation;