import { put, takeEvery } from 'redux-saga/effects';
import { Creators } from '../actions';
import { getData } from '../../api';

function* testSagaRequest(action) {
    try {
        let asyncData = yield getData(action.range)
        yield put(Creators.testSagaSuccess(asyncData))
    } catch (err) {
        yield put(Creators.testSagaFailure("Range not found"))
    }
}

export function* sagaDemo() {
    yield takeEvery('TEST_SAGA_REQUEST', testSagaRequest)
}