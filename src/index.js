import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Route, Link, HashRouter as Router, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './redux/store'

import AWS from 'aws-sdk'
import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import AWSConfig from './configs/aws'

import Root from './components/root'
import ReduxDemo from './components/reduxDemo'
import SagaDemo from './components/sagaDemo'
import NotFound from './components/notFound'

import './styles/main.scss'

Amplify.configure({
	Auth: {
		mandatorySignIn: false,
		region: AWSConfig.cognito.REGION,
		identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
		userPoolId: AWSConfig.cognito.USER_POOL_ID,
		userPoolWebClientId: AWSConfig.cognito.APP_CLIENT_ID
	}
});

Auth.currentSession()
	.then(data => {
		let loginurl = 'cognito-idp.' + AWSConfig.cognito.REGION + '.amazonaws.com/' + AWSConfig.cognito.USER_POOL_ID
		// Add the User's Id Token to the Cognito credentials login map.
		AWS.config.region = AWSConfig.cognito.REGION;
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
			Logins: {
				[loginurl]: data.getIdToken().getJwtToken()
			}
		});
		startApp();
	})
	.catch(err => {
		console.log(err)
		startApp();
	});

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

let AppWrapper = withAuthenticator(App, true)

function startApp() {
	ReactDOM.render(<AppWrapper />, document.getElementById('root'))
}