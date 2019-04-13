import React from 'react';
import { withFirebase } from '../../Firebase';

const Store = (props) => {
  console.log(props)
  const imagesRef = props.firebase.imagesRef;
  // imagesRef now points to 'shop/store/img'

  console.log(imagesRef) 
  return (
    <div>

      <h1>Hi fron store</h1>
    </div>
  )
}

export default withFirebase(Store);