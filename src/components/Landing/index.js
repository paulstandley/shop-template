import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import Shop from './Shop';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      display: ['users', 'one', 'two', 'three', 'four'],
      doc: {},
      docFeilds: {},
      gotData: false,
      querySnapshot: {}
     }
  }

  componentDidMount() {
    this.props.firebase.firestore.doc('store/inv').collection('prouducts').get().then((querySnapshot) => {
      this.setState({querySnapshot})
      querySnapshot.forEach((doc) => {
          console.dir(`${doc._document.proto.fields}`);
          this.setState({...this.state, ...doc, docFeilds : doc._document.proto.fields, gotData: true})
      });
    });
  }  

  clicked = (evt) => {
    this.props.firebase.firestore.doc('store/inv').collection("prouducts").add({
      id: 2,
      title: "Samsung S7",
      img: "img/product-2.png",
      price: 16,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  } 

  render() { 
  
    return ( 
      <FirebaseContext.Consumer>
        {firebase => {
        console.log(this.state)
        console.log(this.state.docFeilds);
          if(this.state.gotData) {
            console.log(this.state.docFeilds.company.stringValue);
            return ( 
            <div><button  onClick={this.clicked}>click</button>
              <h2 style={{ color: 'blue'}}>Prouducts <strong>{this.state.docFeilds.company.stringValue}</strong> </h2>
             <Shop props={this.state.docFeilds} />
            </div>
            )
          }else{
            return <div><h1>Hi from landing</h1><button onClick={this.clicked}>click</button><Shop props={this.state} /></div>
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