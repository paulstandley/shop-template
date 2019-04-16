import React from 'react'
import { FirebaseContext, ProductProvider, ProductConsumer } from '../../../Firebase/context';

const Prouduct = () => {
  return (
    <ProductConsumer>
      {storeData => (
        <h2 onClick={() => {
          console.log(storeData)
        }}>Hi all</h2>   
    )}
    </ProductConsumer>
  )
}

export default Prouduct;
