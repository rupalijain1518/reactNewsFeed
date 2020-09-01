import React, { Component } from 'react';
import firebase from '../firebase/fire'
import { Redirect } from 'react-router-dom'

const divStyle = {
    width: "100%",
    borderRadius: "22px",
    fontSize: "24px",
    fontWeight: "700",
    padding: "4px",
    color: "#fff",
    backgroundColor: "#5aad94",
    borderColor: "#5aad94"

};
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            redirect: false,
            email: '',
            pwd: '',
            error: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email === 'admin1@gmail.com' && this.state.pwd === 'admin1') {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd)
                .then((u) => {
                    this.props.setCurrentUser(u)
                    console.log(this.props.setCurrentUser(u))
                    this.setState({ redirect: true },
                        () => { console.log("redirect state changed") })
                })
                .catch((err) => {
                    this.setState({ error: err },
                        () => {

                            console.log("error occured", err)
                        })
                })

        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd)
                .then()
                .catch((err) => {
                    this.setState({ error: err },
                        () => { console.log("error occured", err) })
                })
        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/addNews' } }

        if (this.state.redirect === true) {
            return <Redirect to={from} />
        }
        return (<div>
            <div className="container">
                <div className="row SetLoginBar">
                    <div className="col-md-5 col-sm-12 SetLogin">
                        <img src="images/imglayer.jpg" alt="layers" />
                    </div>

                    <div className="offset-md-1 col-md-5 col-sm-12">

                        <h2 className="LoginHaed">Log in</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-icons">
                                <input value={this.email} onChange={this.handleChange} id="email" className="input-field" type="text" placeholder="User Name or E-mail Address" />
                            </div>

                            <div className="input-icons">
                                <i className="fa fa-eye PassEye" aria-hidden="true"></i>
                                <input className="input-field" value={this.pwd} type="password" onChange={this.handleChange} id="pwd" name="pwd" minLength="6" placeholder="Password" required />
                            </div>

                            <div className="row SetRememberIcon">
                                <div className="col-md-6 col-sm-12 SetRemembers">
                                    <label htmlFor="vehicle1"> Remember me</label>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                </div>
                                <div className="col-md-6 col-sm-12 SetsRemembers">
                                    <a href1="#" className="SetForgetPw">
                                        <p>Forgot Password ?</p>
                                    </a>
                                </div>
                            </div>

                            <button type="submit" style={divStyle} className="btn btn-primary">Submit</button>





                        </form>
                    </div>
                </div>
            </div ></div >
        )
    }
}
export default Login