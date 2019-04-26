import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../../Firebase';
import Storedisplay from './storeComponents/Storedisplay';
import Cart from './storeComponents/Cart';
import Modal from './storeComponents/Modal';
import ProuductList from './storeComponents/ProuductList';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prouducts: [],
      modal: false,
      inCart: false,
      jsonPlaceHolder: []
    }
  }
  
  componentDidMount() {
    console.log(this.props)
    const STOREDATA = this.props.firebase.getStoreData("prouducts").then((data) => {
      console.log(data)
    });
    fetch('https://jsonplaceholder.typicode.com/photos/')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    this.setState({jsonPlaceHolder: json});
  })
  }
  

  render() {   
    return ( 
      <ProuductList props={this.state} />
    );
  }
}

export default withFirebase(Store);