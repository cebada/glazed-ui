import { loginStart, loginSuccess, loginFailed } from "./userSlice";
import axios from "axios";
import { URL } from "../../config/config";
import { call, put, takeLatest } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';


export function* loginApi({payload}) {
    try {
        const response = yield call(axios.post, URL.LOGIN, payload);
        localStorage.setItem('jwt', response.data.token);
        const jwtData = jwt_decode(response.data.token);
        yield put(loginSuccess(jwtData));
        const history = useHistory();
        jwtData.role === 'admin' ? history.push('/adminDashboard') : history.push('/customerDashboard')
    } catch (err) {
        yield put(loginFailed(err));
    }
}

export default function* userSagaWatch() {
    yield takeLatest(loginStart, loginApi);
}