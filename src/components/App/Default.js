import React, { Component } from 'react';
import styled from 'styled-components';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <Main>
        <h1>404</h1>
        <h2>error</h2>
        <h3>page not found</h3>
        <h4>the requested url <span>
        {this.props.location.pathname}</span>{" "} was not found</h4>
      </Main>
    )
  }
}

const Main = styled.main`
  text-align: center;
  h1 {
    padding: 2rem 0;
    font-size: 3rem;
    color: red;
  }
  span {
    color: red;
  }
`;