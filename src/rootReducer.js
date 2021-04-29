import { combineReducers } from '@reduxjs/toolkit';
import storeSlice from './features/AdminDashboard/storeSlice';
import userSlice from './features/Login/userSlice';

const rootReducer = combineReducers({
    store: storeSlice,
    user: userSlice
});

export const RootState = rootReducer;

export default rootReducer;
