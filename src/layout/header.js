import React, { Component } from 'react';
import LoggedInLinks from './loggedinLinks'
import LogoutLinks from './logoutLinks'
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.authenticated, "from header")
    return (
      <div id="MenuHeaderBar" className="container-fluid MainHeaderBar MenuHeaderBar">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-md navbar-dark NevbarMenuBtn">
              {this.props.authenticated === null || false ? <LogoutLinks /> : <LoggedInLinks />}
            </nav>
          </div>
        </div>
      </div>
    )

  }
}
export default Header;
