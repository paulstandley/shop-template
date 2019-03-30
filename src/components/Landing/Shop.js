import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Store from '../Landing/Store/index';

const Shop = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <header>
        <nav>
          <Link to={ROUTES.STORE} component={Store}>Store</Link>
        </nav>
        <h1>Premier Discount</h1>
      </header>
      <main>
        
      </main>
    </React.Fragment>
  );
};

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

    <FirebaseContext.Consumer>
    {firebase => {
      console.log(props)
      const values = firebase.getStoreData("users").then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { thing } = doc;
            console.dir(`${thing}`);
        });
    });
      console.log(values)
     
  }}
  </FirebaseContext.Consumer>
*/