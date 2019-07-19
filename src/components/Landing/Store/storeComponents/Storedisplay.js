import React, { Component } from 'react';
import styled from 'styled-components';
import Details from './Details';
import Modal from './modal';
import ProuductList from './ProuductList';
import Cart from './Cart';

class Storedisplay extends Component {
  
  render() {
    console.log(this.props) 
    return ( 
      <Main>
        <header>
          <h1>Welcome to Ashes Store</h1>
        </header>
        <ProuductList />
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
    background: var(--storecolor);
    padding: 0;
    margin: 0;
    h1 {
      padding: 0;
      margin: 0;
    }
  }
`;
 
export default Storedisplay;