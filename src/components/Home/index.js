import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Home = () => {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        console.log(firebase.auth.currentUser)
        return <div>I've access to Firebase and render your email.{firebase.auth.currentUser ? <strong>{firebase.auth.currentUser.email}</strong> : <strong> Sign In</strong>}</div>;
      }}
    </FirebaseContext.Consumer>
  )
}

export default Home;