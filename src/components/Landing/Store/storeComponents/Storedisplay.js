import React, { Component } from 'react';
import styled from 'styled-components';
import Details from './Details';
import Modal from './Modal';
import Prouduct from './Prouduct';
import Cart from './Cart';

class Storedisplay extends Component {
  
  render() {
    console.log(this.props) 
    return ( 
      <Main>
        <header>
          <h1>Hay from store</h1>
        </header>
        <Prouduct />
      </Main>
     );
  }
}

const Main = styled.main`
  background: lightgray;
  padding: 1rem;
  margin: 1rem;
  header {
    text-align: center;
    background: lightblue;
    padding: 0;
    margin: 0;
    h1 {
      padding: 0;
      margin: 0;
    }
  }
`;
 
export default Storedisplay;