import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators } from '../../redux/actions'

import './style.scss'

// No need to import images refered in used in CSS files
import smallimg from '../../../assets/smallimg.jpg'
import bigimg from '../../../assets/bigimg.jpg'

class ReduxDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            message: "Message from private state"
        }
    }

    changeMsg() {
        this.props.dispatch(Creators.changeMessage("New Message from action dispatch."))
        this.setState({
            counter: 2
        })
    }

    render() {
        return (
            <div className="container text-center reduxDemoContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="messageContainer">
                            {this.props.message}
                        </h3>
                        <br />
                        <h3 className="messageContainer">
                            {this.state.message} --- {this.state.counter}
                        </h3>
                        <br />
                        <button className="btn btn-primary changeMsgButton" onClick={this.changeMsg.bind(this)}>
                            Change state
                        </button>
                        <h4>Images - Small images are included in bundle, large images are loaded by browser.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="sampleimg" src={smallimg}></img>
                    </div>
                    <div className="col-md-6">
                        <img className="sampleimg" src={bigimg}></img>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

function mapStateToProps(state) {
    return {
        message: state.global.message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)