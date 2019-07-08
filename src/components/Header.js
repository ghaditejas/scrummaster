import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails: ''
        }
        this.UserLogout = this.UserLogout.bind(this);
    }
    UserLogout(){
        localStorage.clear();
    }
    componentWillMount(){   

        if(localStorage.getItem('loggedin') !== null){
            axios.get('http://10.0.100.226:3001/dashboard', { headers: { Authorization: localStorage.getItem('token') } }).then(res => {
                this.setState({
                    userDetails: res.data.data[0]
                });
                this.props.action(res.data.feedback);
            })
            .catch((error) => {
                alert('error ' + error);
            });
        }

    }
    render() {
        return(
            <div>
            <header className="main-header">
                <a href="javascript:void(0)" className="logo">
                    <span className="logo-lg"><b>Scrum</b>Master</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                                    <span className="hidden-xs">{this.state.userDetails.name}</span>
                                </a>
                            </li>
                            <li className="pull-right">
                            <a href="#" onClick={this.UserLogout}><i className="fa fa-sign-out"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={"http://10.0.100.226:3001/"+this.state.userDetails.profile_photo} className="img-circle" alt="Image" />
                        </div>
                        <div className="pull-left info">
                            <p>{this.state.userDetails.name}</p>
                        </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                        <Link to="/dashboard" >
                            <i className="fa fa-dashboard"></i> 
                            <span>Dashboard</span>
                        </Link>
                        </li>
                        <li className="treeview">
                        <Link to="/addfeedback" >
                            <i className="fa fa-user"></i> 
                            <span>Add Feedback</span>
                        </Link>
                        </li>
                    </ul>
                </section>                
            </aside>
            </div>
        );
    }
}
export default Header;

