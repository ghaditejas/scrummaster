import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            redirect: false,
            error: false
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.checkLoginCredentials = this.checkLoginCredentials.bind(this);
    }
    
    inputChangeHandler(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    
    checkLoginCredentials(e){
        e.preventDefault();
        const login_details = {
            email_id: this.state.email,
            password: this.state.password
        };
        
        axios.post('http://10.0.100.226:3001/login',  login_details )
        .then(res => {
            if(res.data.status_code == '200') {
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('loggedin',true);
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
    
    redirectToDashboard(){
        if(this.state.redirect){
            return <Redirect to="/dashboard" />
        }
    }
    
    render() {
        return(
            <div>
                {this.redirectToDashboard()}
                <div className="login-box">
                    <div className="login-logo">
                        <b>Scrum Master</b>
                    </div>
                    <div className="login-box-body">
                        <h3> <p className="login-box-msg">Sign in</p> </h3>
                        <Form  id="login" method="post">
                            {(this.state.error) && <p className="error">Invalid Credentials</p>}
                            <div className="form-group has-feedback">
                                <label>Email</label>
                                <Input type="email" name="email" className="form-control" value={this.state.email} onChange={this.inputChangeHandler} placeholder="Email*" validations={[required, email]}/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label>Password</label>
                                <Input type="password" name="password" className="form-control" value={this.state.password} onChange={this.inputChangeHandler} placeholder="Password*" validations={[required]} />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.checkLoginCredentials}>Sign In</Button>
                                    <label>Don't have account?</label><Link className="m-l-5" to="/register">Register</Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;