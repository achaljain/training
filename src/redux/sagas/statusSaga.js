import { put, select, takeEvery, all } from 'redux-saga/effects';
import { Creators } from '../actions';

function* statusAction(action) {
    try {
        const { status } = yield select(_ => _.global)
        let newStatus

        if (action.type.endsWith('_REQUEST')) { // request action
            newStatus = {
                ...status,
                [action.type.substr(0, action.type.length - 8)]: 'request',
            }
            yield put(Creators.updateStatus({ status: newStatus }))

        } else if (action.type.endsWith('_SUCCESS')) { // success action
            newStatus = {
                ...status,
                [action.type.substr(0, action.type.length - 8)]: 'success',
            }
            yield put(Creators.updateStatus({ status: newStatus }))

        } else if (action.type.endsWith('_FAILURE')) { // failure action
            newStatus = {
                ...status,
                [action.type.substr(0, action.type.length - 8)]: 'failure',
            }
            yield put(Creators.updateStatus({ status: newStatus }))
        }
    } catch (err) {
        console.log("status update error - ", err);
    }
}

export function* statusSaga() {
    yield all([
        takeEvery('*', statusAction),
    ])
}