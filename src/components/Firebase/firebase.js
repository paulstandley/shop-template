import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore();
    this.storage = app.storage();
    this.storageRef = this.storage.ref();
    this.imagesRef = this.storageRef.child('shop/store/img');
    this.products = [];
    this.detailProduct = "";
    this.cart = [];
    this.modalOpen = false;
    this.modalProduct = "";
    this.cartSubtotal = 0;
    this.cartTax = 0;
    this.cartTotal = 0;
    this.addTotals = this.addTotals.bind(this);
  }

  getStoreData = (page) => this.firestore.doc('store/yMSFIEDsZGIqLsCchmAQ').collection(page).get();
  
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

 // *** store context ***

 
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

  addTotals = () => {
    let subTotal = 0;
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    console.log(subTotal);
  }
}

export default Firebase;