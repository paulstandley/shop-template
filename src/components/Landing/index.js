import React, { Component } from 'react';
import Shop from './Shop';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>Hi From Landing</h1>
        <Shop />
      </div>
     );
  }
}
 
export default Landing;
