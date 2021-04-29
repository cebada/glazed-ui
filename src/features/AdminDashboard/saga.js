import { getStoresFailed, getStoresStart, getStoresSuccess } from "./storeSlice";
import axios from "axios";
import {URL} from "../../config/config";
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchStores() {
    let config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("jwt"),
        },
    };
    console.log(config);
    try {
//      const response = yield call(axios.get(URL.GET_STORES, config))
      const response = yield call(axios.get,URL.GET_STORES, config);
  
      console.log(response)
      yield put(getStoresSuccess(response.data.stores));
    } catch (err) {
      console.log(err);
      yield put(getStoresFailed(err));
    }
    
}

export default function* storeSagaWatch() {
    yield takeLatest(getStoresStart, fetchStores);
}
