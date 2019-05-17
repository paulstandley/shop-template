import React, { Component } from 'react';
import FirebaseProvider from '../../../Firebase/context';

class ProuductList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log(this.props) 
    console.log(this.props.jsonPlaceHolder); // ?
    return ( 
     <div>
       <h2>ProuductList</h2>
     </div>
     );
  }
}
 
export default ProuductList;