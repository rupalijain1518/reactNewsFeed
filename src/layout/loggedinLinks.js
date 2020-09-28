import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase/fire'
class LoggedInLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }

  logOutUser() {
    setTimeout(firebase.auth().signOut(), 3000);
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">


          <li className="nav-item">
            <NavLink className="nav-link" exact to="/addNews">Add News</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/listNews">List News</NavLink>
          </li>

          <li className="nav-item"><NavLink className='nav-link' exact to='/news-portal'>
            Newsletter
				      </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <NavLink className="btn btn-success" onClick={this.logOutUser} exact to="/logout">Logout</NavLink>
          </li>

        </ul>
      </div>

    );

  }

}
export default LoggedInLinks;