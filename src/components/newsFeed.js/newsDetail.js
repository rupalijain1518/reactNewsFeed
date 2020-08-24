import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Link} from 'react-router-dom'
class NewsDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('newsData').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('newsData').doc(id).delete().then(() => {
     this.props.history.push("/listNews")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });

  }

render(){

  return (
    
    <div className = "container">
    <br/>
    
  <div className="card text-center" styles="width: 18rem;">
      <br/>
<center>  {this.state.user.url ? <img src={this.state.user.url} alt="..." className="rounded" height="170px" width="170px"/> : "No picture"}
     </center>
  <div className="card-body">
  <h5 className="card-title">Heading:{this.state.user.heading} </h5>
  <p className="card-text"><small className="text-muted">News Link:{this.state.user.link}</small></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Description :{this.state.user.description}</li>
    <li className="list-group-item">Date:{this.state.user.date}</li>
  </ul>
  <div className="card-body">
  <Link to={`/editNews/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
  </div>
  </div>
  </div>
 );

}
}
export default NewsDetail;
