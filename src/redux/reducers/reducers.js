import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Types } from '../actions'

export const InitialState = Immutable({
    status: {},
    message: "This is message from state",
    asyncData: []
})

const updateStatus = (state, action) => {
    return Immutable.merge(state, action.status)
}

const changeMessage = (state, action) => {
    return {
        ...state,
        message: action.message
    }
}

const asyncData = (state, action) => {
    return {
        ...state,
        asyncData: action.asyncData
    }
}

export const handlers= {
    [Types.CHANGE_MESSAGE]: changeMessage,
    [Types.TEST_SAGA_SUCCESS]: asyncData,
    [Types.UPDATE_STATUS]: updateStatus
}

export default createReducer(InitialState, handlers)