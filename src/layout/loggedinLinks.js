import React, { Component }  from 'react';
import { NavLink} from 'react-router-dom';
import firebase from '../firebase/fire'
class LoggedInLinks extends Component{
constructor (props){
  super(props);
  this.state= {
authenticated :false
  }
}

logOutUser(){
setTimeout(firebase.auth().signOut(), 3000);
}

render(){
  return(    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
          
          
    <li className="nav-item">
            <NavLink className="nav-link" exact to="/addNews">Add News</NavLink>
          </li>
           
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/listNews">List News</NavLink>
          </li>
          
              </ul>
              <ul className="navbar-nav nav-right">
              
              <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li>

        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <li className="nav-item">        <NavLink className="nav-link" exact to="/logout">
                <button onClick = {this.logOutUser} type="button"className="btn btn-dark">logout</button></NavLink>
              </li>

              </ul>
    </div>  
      
    );

}

}
export default LoggedInLinks;