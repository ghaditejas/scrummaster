import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import validator from 'validator';
import axios from 'axios';


const required = (value) => {
  if (!value.toString().trim().length) {
    return(
        <span className="error">Required</span>
    );
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <span className="error">{value} is not a valid email.</span>);
  }
};

class Register extends Component {
    constructor(){
        super();
        this.state = {
            emailId:'',
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
        formData.append('profile_photo', this.state.selectedFile);
        formData.append('name', this.state.name);
        formData.append('email_id', this.state.emailId);
        
        axios.post('http://10.0.100.226:3001/users',  formData )
        .then(res => {
            if(res.data.status_code == '200') {
                this.setState({
                    redirect: true
                });
            } else {
                this.setState({
                    error: true
                });
            }
        }).catch(err => {
            this.setState({
                error: true
            });
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
                        <Form  id="register" encType="multipart/form-data" method="post">
                            {(this.state.error) && <p className="error">Something went wrong.</p>}
                            <div className="form-group has-feedback">
                                <label>Email</label>
                                <Input type="email" name="emailId" className="form-control" placeholder="Email*" value={this.state.emailId} onChange={this.inputChangeHandler} validations={[required, email]}/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label>Full Name</label>
                                <Input type="text" name="name" className="form-control" placeholder="Full Name*" value={this.state.name} onChange={this.inputChangeHandler} validations={[required]} />
                                <span className="glyphicon glyphicon-text form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label>Upload Photo</label>
                                <Input type="file" name="contact_pic" className="form-control file_field" onChange={this.onFileChangeHandler} validations={[required]} />
                                <span className="glyphicon glyphicon-upload form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4 col-xs-offset-8">
                                    <Button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.registerUser}>Register</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;