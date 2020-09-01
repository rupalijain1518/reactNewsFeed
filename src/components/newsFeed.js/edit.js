import React, { Component } from 'react';
import firebase from '../../firebase/fire';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      heading: '',
      link: '',
      image: [],
      url: '',
      date: '',
      description: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('newsData').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          heading: board.heading,
          description: board.description,
          link: board.link,
          date: board.date,
          url: board.url, image: []
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  //for image
  handleChange1 = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }), () => { });
    }
  };
  // for textfields
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => {
    })
  }
  handleSubmit = async (e) => {
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
          console.log("Error from firebase storage", error);
          this.setState({
            error: error
          }, () => { })
        },
        async () => {
          // complete function ...

          await firebase.storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL() // <- this is not working
            .then(url => {
              this.setState(() => ({ url }), () => {
                console.log(this.state, "uplaod pic")

              });
            }).catch(
              error => {
                this.setState({
                  error: error
                }, () => { })
                console.log("something went wrong while getting URL", error)
              }
            );
        })
  }
  handleSubmit1 = async (e) => {
    e.preventDefault();

    const { heading, description, link, date, url } = this.state;

    const updateRef = await firebase.firestore().collection('newsData').doc(this.state.key);
    updateRef.set({
      heading,
      description,
      link, date, url
    }).then((docRef) => {
      this.setState({
        key: '',
        heading: '',
        description: '',
        link: '', date: ''
      });
      this.props.history.push("/showNews/" + this.props.match.params.id)
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT NEWS
            </h3>
          </div>
          <div className="panel-body">
            <form >

              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Select Image</label>

                <table>
                  <tr>
                    <td>    <input required type="file"
                      value={this.image}
                      onChange={this.handleChange1}
                      className="form-control-file" id="image" />
                    </td>
                    <td>  <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Upload</button>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="form-group">
                <label htmlFor="title">Heading:</label>
                <input type="text" className="form-control" name="heading" value={this.state.heading} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" class="form-control" name="link" value={this.state.link} onChange={this.onChange} placeholder="Author" />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="date" value={this.state.date} onChange={this.onChange} placeholder="Author" />
              </div>

              {this.state.url && this.state.heading && this.state.link && this.state.date && this.state.description ?
                <button type="submit" onClick={this.handleSubmit1} className="btn btn-primary">Submit</button>
                : <button disabled className="btn btn-primary"> Submit</button>}

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;