import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, browserHistory } from 'react-router-dom';
import Login from './src/components/Login'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Register from './src/components/Register'
import Dashboard from './src/components/Dashboard'
import AddFeedback from './src/components/AddFeedback'

class App extends Component {
    constructor(){
        super();
        this.state = {
            feedback: []
        }
        this.getDashboardDetails = this.getDashboardDetails.bind(this);
    }
    getDashboardDetails(res){
      
                this.setState({
                    feedback: res
                });
    }
    render() {
        return(
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Switch>
                            <Route exact path = '/' component = {Login} />
                            <Route exact path = '/register' component = {Register} />
                            <Route exact path = '/dashboard' render={(props) => (localStorage.getItem('loggedin') ? <div><Header action={this.getDashboardDetails}/><Dashboard feedback={this.state.feedback} /><Footer /></div> : (<Redirect to="/" />))} />
                            <Route exact path = '/addfeedback' render={(props) => (localStorage.getItem('loggedin') ? <div><Header action={this.getDashboardDetails}/><AddFeedback /><Footer /></div> : (<Redirect to="/" />))} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;