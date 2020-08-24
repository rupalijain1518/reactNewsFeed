import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
class NewsDetail extends Component{
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('newsData');
    this.unsubscribe = null;
    this.state = {
        filtered:[],
    };
  }

  
onCollectionUpdate = (querySnapshot) => {
const filtered = [];
querySnapshot.forEach((doc) => {
  const { heading , link , date , description ,url} = doc.data();
  filtered.push({
    key: doc.id,
    doc, // DocumentSnapshot
   url, heading , link , date , description
  });
});
this.setState({
  filtered
});
}

componentDidMount() {
this.unsubscribe = this.ref.orderBy("heading", "asc").onSnapshot(this.onCollectionUpdate);
}
render(){

  return (
    
    <div className = "container">
    <br/>

      <label htmlFor="formGroupExampleInput">News Update</label>
  
    { this.state.filtered.map(pack =>
      
  <div className="card text-center" key={pack.key} styles="width: 18rem;">
      <br/>
<center>  {pack.url ? <img src={pack.url} alt="..." class="rounded" height="170px" width="170px"/> : "No picture"}
     </center>
  <div className="card-body">
  <h5 className="card-title">Heading:{pack.heading} </h5>
  <p className="card-text"><a href={pack.link}><small className="text-muted">News Link:{pack.link}</small></a></p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Description:{pack.description}</li>
    <li className="list-group-item">Date:{pack.date}</li>
  </ul>
<br/>
  </div>
  )}  
  </div>
 );
}
}
export default NewsDetail;
