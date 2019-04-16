import React, { Component } from 'react';

const FirebaseContext = React.createContext(null);

class ProductProvider extends Component {
  state = { 
    products: [],
    detailProduct: "",
    cart: [],
    modalOpen: false,
    modalProduct: "",
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
   }

   componentDidMount() {
     console.log(this.state);
   }

   handleDetail = () => {
     console.log("handel details");
   }

   addToCart = () => {
    console.log("add to cart");
   }

   openModal = () => {
     console.log("open modal");
   }

   closeModal = () => {
     console.log("close modal");
   }

   increment = () => {
     console.log("increment");
   }

   decrement = () => {
     console.log("decrement");
   }

   removeItem = () => {
     console.log("remove item");
   }

   clearCart = () => {
     console.log("clear cart");
   }

  render() { 
    return ( 
      <FirebaseContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </FirebaseContext.Provider>
     );
  }
}

const ProductConsumer = FirebaseContext.Consumer;

export { ProductProvider, ProductConsumer };

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;

/* 
class Loader extends Component {

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
    })
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
    return ( null );
  }
}
*/