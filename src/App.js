import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import firebase from './firebase/fire'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery'
import News from './components/newsFeed.js/news'
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';
import DisplayNews from './components/homeElements/displayNews'
import Login from './components/homeElements/login'
import ImageUpload from './components/misc/imageUpload'
import NewsDetail from '../src/components/newsFeed.js/newsDetail'
import Edit from './components/newsFeed.js/edit';
import ListNews from './components/newsFeed.js/listNews';
import Logout from '../src/components/misc/logout'
import NotFound from '../src/components/misc/notFound';
function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
    
  return (
    <Route

    {...rest}
      render=
      {(props) => authenticated === false || null ? 
      <Redirect to={{pathname: '/login', state: {from: props.location}}} /> : 
      <Component {...props} {...rest} />       
      /*:   authenticated === null?  <Component {...props} {...rest} /> */ 
      }
   />
  )
}


class App extends Component {
   constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
   this.state = {
      authenticated: false,
      currentUser: null,
    };
  }

  setCurrentUser(u) {
    if (u) {
      this.setState({
        currentUser: u,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: null
      })
    }
    console.log("Authen",this.state.authenticated ,this.state.currentUser)
  }
  
  componentDidMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        this.setState({
          authenticated: true,
          currentUser: u
        })
  } else {
        this.setState({
          authenticated: null,
          currentUser: null,
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }
  render() {
    return (
      <div className="App">
  <Router>

<Header authenticated = {this.state.authenticated}/>

   <Switch>
    <Route exact path='/' 
     render={(props) => { return <DisplayNews setCurrentUser={this.setCurrentUser} {...props} />}}
     />
    <Route  exact path = "/login"
     render={(props) => { return <Login setCurrentUser={this.setCurrentUser} {...props} />}}
     />
    <AuthenticatedRoute authenticated={this.state.authenticated} exact path = '/addNews' component = {News}/>
    <AuthenticatedRoute authenticated={this.state.authenticated} exact path = '/listNews' component = {ListNews}/>
    <AuthenticatedRoute authenticated={this.state.authenticated} exact path='/showNews/:id' component={NewsDetail} />
    <AuthenticatedRoute authenticated={this.state.authenticated} exact path='/editNews/:id' component={Edit} />
    <Route exact path='/logout' component={Logout}/>  

    <Route  component = {NotFound} /> 
</Switch>
    
  </Router>
  </div>
    );
  }
}


export default App;
