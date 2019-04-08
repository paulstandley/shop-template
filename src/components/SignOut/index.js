import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);

const Button = styled.button`
  font-size: 2rem;
  color: var(--navcolor);
  border: var(--navcolor) 0.08rem ridge;
`;