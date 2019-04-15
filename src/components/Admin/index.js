import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(this.props)
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      console.log(usersObject)
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />

        <div>
          <h2>Upload Images</h2>
        </div>

      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);


   /*
  const imagesRef = this.props.firebase.imagesRef;
  // imagesRef now points to 'shop/store/img'
  const storage = this.props.firebase.storage;

  console.table(imagesRef);
  console.log(storage);

  // Create a reference from a Google Cloud Storage URI
  var gsReference = storage.refFromURL('gs://shop-template-91d73.appspot.com/shop/store/img/resizeimage5.jpg');
  console.log(gsReference)

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS reserch

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
  */