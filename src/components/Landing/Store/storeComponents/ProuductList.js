import React, { Component } from 'react';
import FirebaseProvider from '../../../Firebase/context';
import styled from 'styled-components';

class ProuductList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    console.log(this.props) 
    console.log(this.props.jsonPlaceHolder); // ?
    return ( 
     <Div>
       <section>
        <h2>Vap Prouducts</h2>
         <img src="img/holder.png" alt="holder" width="225" height="300"/>
       </section>
       <section>
       <h2>Vap Prouducts</h2>
         <img src="img/holder.png" alt="holder" width="225" height="300"/>
       </section>
       <section>
       <h2>Vap Prouducts</h2>
         <img src="img/holder.png" alt="holder" width="225" height="300"/>
       </section>
       <section>
       <h2>Vap Prouducts</h2>
         <img src="img/holder.png" alt="holder" width="225" height="300"/>
       </section>
     </Div>
     );
  }
}

const Div = styled.div`
  display: flex;
  padding: 1rem;
  section {
    padding: 1rem 2rem;
    h2 {
      text-align: center;
      color: blue;
    }
  }
`;
 
export default ProuductList;