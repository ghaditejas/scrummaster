import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, browserHistory } from 'react-router-dom';
import Login from './src/components/Login'
import Register from './src/components/Register'
import Dashboard from './src/components/Dashboard'

class App extends Component {
    render() {
        return(
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Switch>
                            <Route exact path = '/' component = {Login} />
                            <Route path = '/register' component = {Register} />
                            <Route path = '/dashboard' component = {Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;