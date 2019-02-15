import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators } from '../../redux/actions'

class SagaDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asyncData: this.props.asyncData,
            testSagaStatus: this.props.testSagaStatus
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            asyncData: nextProps.asyncData,
            testSagaStatus: nextProps.testSagaStatus
        })
    }

    loadAsyncData() {
        this.props.dispatch(Creators.testSagaRequest(1 + Math.random() * 10))
    }

    render() {
        let listElem;
        if(this.state.testSagaStatus === 'request') {
            listElem = <div>Loading...</div>
        } else if(this.state.asyncData.length > 0) {
            listElem = this.state.asyncData.map((elem) => {
                return (
                    <div key={`item - ${elem}`}>
                        Item: {elem}
                    </div>
                )
            })
        } else {
            listElem = <div>Data for found</div>
        }
        return (
            <div className="container sagaDemoContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Saga Demo</h4>
                        <button className="btn btn-primary" onClick={this.loadAsyncData.bind(this)}>Load Data</button>
                        {listElem}
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
        asyncData: state.global.asyncData,
        testSagaStatus: state.global.status.TEST_SAGA
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SagaDemo)