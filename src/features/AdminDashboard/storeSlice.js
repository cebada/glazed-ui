import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const LoadingState = {
  STATE_LOADING: 'STATE_LOADING',
  STATE_READY: 'STATE_READY',
  STATE_ERROR: 'STATE_ERROR',
  STATE_SUCCESS: 'STATE_SUCCESS',
}

const defaultState= {
  create: {
    name: '',
    schedules: [],
    step: 0,
    scheduleStep: 0,
    errors: {},
    state: LoadingState.STATE_READY,
  },
  list: {
    stores: [],
    errors: {},
    state: LoadingState.STATE_READY
  }
};

const stores = createSlice({
  name: 'stores',
  initialState: defaultState,
  reducers: {
    getStoresStart(state) {
      state.list.state = LoadingState.STATE_LOADING;
    },
    getStoresSuccess(
      state,
      { payload }
    ) {
      state.list.state = LoadingState.STATE_SUCCESS;
      state.list.stores = payload;
    },
    getStoresFailed(state, { payload }) {
      const { message } = payload;
      state.list.state = LoadingState.STATE_ERROR;
      state.list.errors = [state.list.errors, message];
    },
    addNameToStore(state, { payload }) {
      state.create.name = payload;
      state.create.step += 1;
    },
    decrementStep(state) {
      state.create.step -= 1;
    },
    updateStoreNameTxt(state, { payload }){
      state.create.name = payload
    },
    addScheduleToStore(state, { payload }) {
      state.create.schedules = [payload];
      state.create.scheduleStep += 1;
    },
    /*addSchedulesToStore(state, { payload }) {
      state.create.schedules = payload;
    },*/
    createStoreSuccess(state, { payload }) {
      state.create = defaultState.create;
    },
    createStoreFailed(state, {payload}) {
      const { message } = payload;
      state.create.state = LoadingState.STATE_ERROR;
      state.create.errors = message;
    },
    addNewStore(state, {payload}) {
      state.list.stores = [
        ...state.list.stores,
        payload
      ];
    }
  }
});

export const {
  getStoresStart,
  getStoresSuccess,
  getStoresFailed,
  addNameToStore,
  addSchedulesToStore,
  decrementStep,
  createStoreSuccess,
  createStoreFailed,
  addNewStore
} = stores.actions;

export default stores.reducer;
