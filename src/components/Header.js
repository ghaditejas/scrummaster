import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div>
            <header className="main-header">
                <a href="" className="logo">
                    <span className="logo-lg"><b>Scrum</b>Master</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="" className="user-image" alt="" />
                                    <span className="hidden-xs">Sonal Pansari</span>
                                </a>
                            </li>
                            <li className="pull-right">
                            <a href=""><i className="fa fa-sign-out"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="" className="img-circle" alt="Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Sonal Pansari</p>
                        </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                        <a>
                            <i className="fa fa-dashboard"></i> 
                            <span><Link to="/dashboard" >Dashboard</Link></span>
                        </a>
                        </li>
                        <li className="treeview">
                        <a>
                            <i className="fa fa-user"></i> 
                            <span><Link to="/addfeedback" >Add Feedback</Link></span>
                        </a>
                        </li>
                    </ul>
                </section>                
            </aside>
            </div>
        );
    }
}
export default Header;

