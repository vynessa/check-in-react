import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'; 

class DisplayEmail extends Component {
  render () {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
      <div>
        <div className="container display-email-success">
          <div className="display-email-details">
            <h5 >Hi {user.displayName}</h5>
            <p>An email has been sent to {user.displayName}</p>
            <p>Make yourself comfortable in our lounge</p>
            <p>{user.displayName} will be with you in a bit.</p>
          </div>
        </div>  
      </div>
    )
  }
}

export default DisplayEmail;
