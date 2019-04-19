import React, { Component } from 'react';
import FirebaseProvider from '../../../Firebase/context';

class ProuductList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log(this.props) 
    return ( 
     <div>
       <h1>ProuductList</h1>
     </div>
     );
  }
}
 
export default ProuductList;