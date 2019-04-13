import React from 'react';
import { withFirebase } from '../../Firebase';

const Store = (props) => {
  console.log(props)
  const thing = props.firebase;
  
  console.log(thing) 
  return (
    <div>

      <h1>Hi fron store</h1>
    </div>
  )
}

export default withFirebase(Store);