import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Shop = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      const values = firebase.holder;
      console.log(values)
     
  }}
  </FirebaseContext.Consumer>
);

export default Shop;

/*
{firebase => {
      console.log(firebase)
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
    const inst = firebase.docRef.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc}`);
      });
  });

      return <div>I've access to Firebase and render something {inst ? <h2>true</h2> : <h2>false</h2> }.</div>;
    }}
*/