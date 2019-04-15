import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../../Firebase';
import Storedisplay from './storeComponents/Storedisplay';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prouducts: []
    }
  }
  
  componentDidMount() {
    console.log(this.props)
 
}

// return firbase context
render() {   
  return ( 
    <FirebaseContext.Consumer>
      {firebase => {
        if(!firebase) {
          return <Storedisplay />
        }else{
          return <Storedisplay props={firebase} />;
        }   
      }}
    </FirebaseContext.Consumer>
   );
}
}

export default withFirebase(Store);