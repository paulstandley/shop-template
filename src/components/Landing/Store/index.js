import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../../Firebase';
import Storedisplay from './storeComponents/Storedisplay';
import Cart from './storeComponents/Cart';
import Modal from './storeComponents/Modal';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prouducts: [],
      modal: false,
      inCart: false
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