import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Shop = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      firebase.docRef.collection("users").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default Shop;