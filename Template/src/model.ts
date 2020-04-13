import { Effect, Reducer } from 'umi';
import { PAGE_NAME_UPPER_CAMEL_CASEDto } from './data.d';
import { createPAGE_NAME_UPPER_CAMEL_CASE,updatePAGE_NAME_UPPER_CAMEL_CASE } from './service';

export interface ModalState {
  PAGE_NAME_UPPER_CAMEL_CASEs:PAGE_NAME_UPPER_CAMEL_CASEDto[];
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  reducers: {
    createPAGE_NAME_UPPER_CAMEL_CASE: Effect;
    updatePAGE_NAME_UPPER_CAMEL_CASE: Effect;
  };
  effects: {

  };
}

const Model: ModelType = {
  namespace: 'PAGE_NAME',
  state: {
    PAGE_NAME_UPPER_CAMEL_CASEs: [],
  },
  reducers: {
    *createPAGE_NAME_UPPER_CAMEL_CASE({ payload }, { call, put }) {
      const response = yield call(createPAGE_NAME_UPPER_CAMEL_CASE, payload);
      yield put({
        type: '',
        payload: response.items,
      })
    },
    *updatePAGE_NAME_UPPER_CAMEL_CASE({ payload }, { call, put }) {
      const response = yield call(updatePAGE_NAME_UPPER_CAMEL_CASE, payload);
      yield put({
        type: '',
        payload: response.items,
      })
    }
  },
  effects: {

  },

};

export default Model;
