import React, { Component } from 'react';
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

class Register extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row SetLoginBar">
                        <div className="col-md-5 col-sm-12 SetLogin">
                            <img src="images/imglayer.jpg" alt="layers" />
                        </div>

                        <div className="offset-md-1 col-md-5 col-sm-12">
                            <h2 className="LoginHaed">Register</h2>
                            <form id="continuepage">
                                <div className="input-icons">
                                    <input className="input-field" type="text" placeholder="Full Name" />
                                </div>

                                <div className="input-icons">
                                    <input className="input-field" type="text" placeholder="School Name" />
                                </div>

                                <div className="input-icons">
                                    <input className="input-field" type="text" placeholder="e-mail" />
                                </div>

                                <div className="input-icons">
                                    <select name="Classname" id="Classname" className="input-field">
                                        <option value='Class'>Class</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <div className="input-icons SetsPasswordsBox">
                                    <input className="InputField" placeholder="dd/mm/yyyy" name="dd/mm/yyyy" />
                                </div>

                                <div className="input-icons SetsPassword">
                                    <input className="input-field" type="text" placeholder="Pin Code" />
                                </div>

                                <div className="input-icons">
                                    <input className="input-field" type="text" placeholder="Phone number" />
                                </div>


                                <div className="input-icons">
                                    <input className="input-field SetPasswordBox" id="pwd" name="pwd" minLength="8" type="Password" placeholder="Password" required />
                                    <input className="input-field SetsPasswordBox" id="pwd" name="pwd" minLength="8" type="Password" placeholder="Conform Password" required />
                                </div>

                                <div className="row SetgenderTyp">
                                    <div className="col-sm-12">
                                        &nbsp;<input type="radio" name="gender" id="male" value="male" />
                                       &nbsp; <label htmlFor="male">Male</label>
                                       &nbsp;<input type="radio" name="gender" id="female" value="female" />
                                        &nbsp;<label htmlFor="female">Female</label>
                                        &nbsp;  <input type="radio" name="gender" id="other" value="other" />
                                        &nbsp;<label htmlFor="other">Other</label>
                                    </div>
                                </div>


                                <div className="row SetRememberIcon">
                                    <div className="col-md-6 col-sm-12 SetRemembers">
                                        <a href="#" style={divStyle} className="btn btn-primary">Register</a>
                                    </div>
                                    <div className="col-md-6 col-sm-12 SetRemembers">
                                        <a href="index.html" className="btn btn-primary " style={divStyle}>Cancel</a>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Register