import React, { Component } from 'react';

class User extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>{currentUserName}'s Meeting Minutes</h1>
        <p>Email: {currentUserEmail}</p>
       
      </div>
    );
  }
}

export default User;