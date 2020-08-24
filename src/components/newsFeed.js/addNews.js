import React , {Component} from 'react'
import firebase from '../../firebase/fire'

class AddNews extends Component {
    constructor(props) {
        super(props)        
//Binding of methods
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        // for text fields   
        this.handleChange = this.handleChange.bind(this)   
        // for image field
        this.handleChange1 = this.handleChange1.bind(this)
// state variables        
        this.state = {
          heading:'',
          link:'',
          image:[],
          url:'',
          date:'',
          description:''
      ,error :""
        }
      }  
      //for image
      handleChange1 = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({ image }),()=>{});
        }
      };
// for textfields
      handleChange = (e)=>{
        this.setState({
          [e.target.id] :e.target.value
        },()=>{
          })
      }    
//handle onSubmit()
      handleSubmit= async (e)=>{
      e.preventDefault();
      //checks whether image is there 
      const { image } = this.state;
      // adding image to the images folder of storage
      const uploadTask = await firebase.storage().ref(`images/${image.name}`)
      .put(image).on(
        "state_changed",
        snapshot => {
        },
        error => {
          // Error function ...
          console.log("Error from firebase storage",error);
        this.setState({
          error : error
        },()=>{})
        },
       async () => {
          // complete function ...

          await firebase.storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL() // <- this is not working
          .then(url => {
            this.setState(() => ({ url }),()=>{
            });
          }).catch(
            error =>{
              this.setState({
          error : error
        },()=>{})
              console.log("something went wrong while getting URL" , error)
          }
          );
 })}

    handleSubmit1 = async(e) =>{

      console.log("handle submit 1")
// adding all the data to the firestore
    const db=  firebase.firestore()
      await db.collection("newsData").add({
      link:this.state.link,
      heading : this.state.heading,
      date:this.state.date,
      description:this.state.description, 
      url:this.state.url ? this.state.url : null,
    //  image:this.state.image ?this.state.image :null
    }).then(( res)=>{
          })
          .catch((err) => {
            this.setState({
          error : err
        },()=>{})
            console.log("error occured" ,err)
          });
  

    }
render(){


    return (
        <div>
 { this.state.error && <p className="text-danger">{this.state.error.message}</p>}
        <form >
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">News Heading</label>
    <input required type="text" className="form-control" id="heading" placeholder="News Heading" 
    value = {this.heading}
    onChange = {this.handleChange}/>
  </div>
  
  <div className="form-group">
    <label  htmlFor="formGroupExampleInput">News Link</label>
    <input required type="text" 
       value = {this.link}
       onChange = {this.handleChange}
    className="form-control" id="link" placeholder="News Link"/>
  </div>
  
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Date</label>
    <input type="date" 
      value = {this.date}
      onChange = {this.handleChange}
    className="form-control" id="date" placeholder="Date"/>
  </div>
  <div className="form-group">
    <label required htmlFor="formGroupExampleInput">News Description</label>
    <textarea 
    value = {this.description}
      onChange = {this.handleChange}
    className="form-control" id="description" rows="3"></textarea>
 
  </div>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Select Image</label>

<table>
<tr> 
<td>    <input required type="file" 
    value = {this.image}
      onChange = {this.handleChange1}
    className="form-control-file" id="image"/> 
 </td>
 <td>  <button type="submit" onClick = {this.handleSubmit} className="btn btn-primary">Upload</button>
</td>
</tr>
</table>
  </div>
  
 {this.state.url && this.state.heading && this.state.link && this.state.date && this.state.description ?
 <button type="submit" onClick = {this.handleSubmit1} className="btn btn-primary">Submit</button>
:     <button disabled> Submit</button>}
  
</form>
</div>
    )
}
}

export default AddNews