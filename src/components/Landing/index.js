import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import Shop from './Shop';

class Landing extends Component {
// return firbase context
  render() {   
    return ( 
      <FirebaseContext.Consumer>
        {firebase => {
          if(!firebase) {
            return <Shop />
          }else{
            return <Shop props={firebase} />;
          }   
        }}
      </FirebaseContext.Consumer>
     );
  }
}
 
export default withFirebase(Landing);

/*
    this.props.firebase.firestore.doc('store/inv').collection("prouducts").add({
      first: "Paul",
      middle: "Andrew",
      last: "Standley",
      born: 1972
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
*/
/*
this.props.firebase.firestore.doc('store/inv').collection("prouducts").add([
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  )
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
*/