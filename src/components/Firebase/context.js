import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

const FirebaseProvider = FirebaseContext.Provider;

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