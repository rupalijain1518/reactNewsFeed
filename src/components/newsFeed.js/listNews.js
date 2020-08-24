import React , {Component} from 'react'
import firebase from '../../firebase/fire'
import {Link} from 'react-router-dom'
class ListNews extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('newsData');
        this.unsub = null;
        this.state = {
            filtered:[]
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
    this.unsub = this.ref.orderBy("heading", "asc").onSnapshot(this.onCollectionUpdate);
  }
render(){

    return (
        <div>
          <table className="table">
  <thead>
    <tr>
      <th scope='col'> News Image </th>
      <th scope="col">News Heading</th>
      <th scope="col">News Link</th>
      <th scope="col">News Description</th>
      <th scope="col">News Date</th>
      <th scope="col"> Detail </th>
    </tr>
  </thead>
  <tbody>
  {this.state.filtered.map(pack =>
      <tr key ={pack.key}>
           <td> <a href={pack.url} ><img src={pack.url } alt = "" height="100" width="100"/> </a></td>
                <td>{pack.heading}</td>  
                <td><a href = {pack.link}>{pack.link}</a></td>  
                <td>{pack.description}</td>  
                <td>{pack.date}</td>  
                <td><Link to={`/showNews/${pack.key}`} className="btn btn-secondary">View</Link></td>
                     
                    </tr>   
                    )}
  </tbody>
</table>
        </div>
    )
}
}




export default ListNews