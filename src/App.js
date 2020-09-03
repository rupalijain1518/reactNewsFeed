import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import firebase from './firebase/fire'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery'
import News from './components/newsFeed.js/news'
import Partner from './thirdEye/Partner'
import PrivacyPolicy from './thirdEye/PrivacyPolicy'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NewsPortal from './thirdEye/NewPortal'
import Login from './thirdEye/Login'
import NewsDetail from '../src/components/newsFeed.js/newsDetail'
import Edit from './components/newsFeed.js/edit';
import ListNews from './components/newsFeed.js/listNews';
import Logout from '../src/components/misc/logout'
import NotFound from '../src/components/misc/notFound';
import Footer from '../src/layout/footer'
import About from './thirdEye/about'
import Disclaimer from './thirdEye/Disclaimer';
import Register from './thirdEye/register';
import Home from './thirdEye/home';
function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render=
      {(props) => authenticated === null || false ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> : <Component {...props} {...rest} />

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
        currentUser: true,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: false,
        authenticated: false
      })
    }
  }

  componentDidMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        this.setState({
          authenticated: true,
          currentUser: true
        })
      } else {
        this.setState({
          authenticated: false,
          currentUser: false,
        })
      }

    })
    console.log("App", this.state.authenticated, this.state.currentUser)

  }
  componentWillUnmount() {
    this.removeAuthListener();

  }
  render() {
    return (
      <div className="App">
        <Router>

          <Header authenticated={this.state.authenticated} />

          <Switch>
            <Route exact path='/'
              component={Home} />
            <Route exact path="/login"
              render={(props) => { return <Login setCurrentUser={this.setCurrentUser} {...props} /> }}
            />
            <Route exact path='/privacyPolicy' component={PrivacyPolicy} />
            <Route exact path='/about' component={About} />
            <Route exact path='/disclaimer' component={Disclaimer} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/news-portal' component={NewsPortal} />
            <Route exact path='/partner' component={Partner} />
            <AuthenticatedRoute authenticated={this.state.currentUser} exact path='/addNews' component={News} />
            <AuthenticatedRoute authenticated={this.state.currentUser} exact path='/listNews' component={ListNews} />
            <AuthenticatedRoute authenticated={this.state.currentUser} exact path='/showNews/:id' component={NewsDetail} />
            <AuthenticatedRoute authenticated={this.state.currentUser} exact path='/editNews/:id' component={Edit} />
            <Route exact path='/logout' component={Logout} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}


export default App;
