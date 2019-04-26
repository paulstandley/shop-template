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
       <h1>ProuductList</h1>
       {this.props.jsonPlaceHolder ? console.log(this.props.jsonPlaceHolder[0]) : null}
     </div>
     );
  }
}
 
export default ProuductList;