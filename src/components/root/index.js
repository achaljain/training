import React, { Component } from 'react'
import './style.scss'

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rootContainer text-center">
                <h1>React Redux Webpack</h1>
                <p>
                    Sample application with react, redux and webpack.
                </p>
            </div>
        )
    }
}

export default Root