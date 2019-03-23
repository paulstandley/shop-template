import React, { Component } from 'react';
import  { FirebaseContext } from '../Firebase';
import Shop from './Shop';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      display: []
     }
  }

  componentDidMount() {
  
  }
  
  render() { 
    return ( 
      <FirebaseContext.Consumer>
        {firebase => {
          console.log(firebase)
          return <div><h1>Hi from landing</h1><Shop /></div>
        }}
      </FirebaseContext.Consumer>
     );
  }
}
 
export default Landing;
