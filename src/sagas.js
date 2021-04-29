import { all } from 'redux-saga/effects';
import storeSagaWatch from './features/AdminDashboard/saga';
import userSagaWatch from './features/Login/saga';

export default function* rootSaga() {
    yield all([storeSagaWatch(), userSagaWatch()]);
}
