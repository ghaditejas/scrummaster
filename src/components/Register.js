import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            name:'',
            selectedFile: '',
            error: false,
            redirect: false
        }
        this.registerUser = this.registerUser.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    }
    
    inputChangeHandler(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    onFileChangeHandler(e){
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    redirectToLogin(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
    }
    registerUser(){
        let formData = new FormData();
        formData.append('file', this.state.selectedFile);
        console.log(formData);
        axios.post('http://10.0.100.226:3001/users',  formData )
        .then(res => {
            if(res.data.status_code == '200') {
                this.setState({
                    redirect: true
                });
            }else {
                this.setState({
                    error: true
                });
            }
        })
    }
    render() {
        return(
            <div>
            {this.redirectToLogin()}
                <div className="login-box">
                    <div className="login-logo">
                        <b>Scrum Master</b>
                    </div>
                    <div className="login-box-body">
                        <h3> <p className="login-box-msg">Sign Up</p> </h3>
                        <form  id="register" encType="multipart/form-data" method="post">
                            <div className="form-group has-feedback">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Email*" value={this.state.email} onChange={this.inputChangeHandler} required/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label>Full Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Full Name*" value={this.state.name} onChange={this.inputChangeHandler} required/>
                                <span className="glyphicon glyphicon-text form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label>Upload Photo</label>
                                <input type="file" name="contact_pic" className="form-control file_field" onChange={this.onFileChangeHandler}/>
                                <span className="glyphicon glyphicon-upload form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4 col-xs-offset-8">
                                    <button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.registerUser}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;