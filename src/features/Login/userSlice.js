import { createSlice } from '@reduxjs/toolkit';


export const LoadingState = {
  STATE_LOADING: 'STATE_LOADING',
  STATE_READY: 'STATE_READY',
  STATE_ERROR: 'STATE_ERROR',
  STATE_SUCCESS: 'STATE_SUCCESS',
}

const defaultState= {
    user: {
        name: '',
        role:'',
        state: LoadingState.STATE_READY
    }
};

const user = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    loginStart(state, {payload}){
        state.user.state = LoadingState.STATE_LOADING;
    },
    loginSuccess(state, {payload}){
        state.user.name = payload.name;
        state.user.role = payload.role;
        state.user.state = LoadingState.STATE_SUCCESS;
    },
    loginFailed(state){
        state.user.state = LoadingState.STATE_ERROR;
    },
  }
});

export const {
    loginStart,
    loginSuccess,
    loginFailed
} = user.actions;

export default user.reducer;
