import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';

class Store extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(this.props)
  const imagesRef = this.props.firebase.imagesRef;
  // imagesRef now points to 'shop/store/img'
  const storage = this.props.firebase.storage;

  console.table(imagesRef);
  console.log(storage);

  // Create a reference from a Google Cloud Storage URI
  var gsReference = storage.refFromURL('gs://shop-template-91d73.appspot.com/shop/store/img/resizeimage5.jpg');
  console.log(gsReference)

  gsReference.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
}

  render() {
    return (
      <div>
        <h1>Ho from store</h1>
      </div>
    );
  }
}

export default withFirebase(Store);