import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Route, Link, HashRouter as Router, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './redux/store'

import Root from './components/root'
import ReduxDemo from './components/reduxDemo'
import SagaDemo from './components/sagaDemo'
import NotFound from './components/notFound'

import './styles/main.scss'

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router>
                    <div className="appContainer">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                            <a className="navbar-brand" href="/">Training</a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reduxdemo">Redux Demo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sagademo">Saga Demo</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="contentContainer">
                            <Switch>
                                <Route exact path="/" component={Root} />
                                <Route path="/reduxdemo" component={ReduxDemo} />
                                <Route path="/sagademo" component={SagaDemo} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))