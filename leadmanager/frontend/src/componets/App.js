import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider, positions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {Provider} from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import Login from './accounts/Login'
import Register from './accounts/Register'
import PrivateRoute from './common/PrivateRoute'
import store from '../store'
import { loadUser } from '../actions/auth'

import './bootstrap.css'
import { string } from 'prop-types';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER,
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }
    render() {
        return (
            <Provider store={store} >
                <AlertProvider template={AlertTemplate} 
                    {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts/>
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard}/>
                                    <Route exact path="/register" component={Register}/>
                                    <Route exact path="/login" component={Login}/>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));