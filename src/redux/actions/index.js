import { createActions } from 'reduxsauce'

const { Types, Creators } =  createActions({
    updateStatus: ['status'],
    changeMessage: ['message'],
    testSagaRequest: ['range'],
    testSagaSuccess: ['asyncData'],
    testSagaFailure: []
})

export { Types, Creators }