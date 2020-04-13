import { Effect, Reducer } from 'umi';
import { PAGE_NAME_UPPER_CAMEL_CASEDto } from './data.d';

export interface ModalState {
  PAGE_NAME_UPPER_CAMEL_CASEs:PAGE_NAME_UPPER_CAMEL_CASEDto[];
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  reducers: {

  };
  effects: {

  };
}

const Model: ModelType = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    PAGE_NAME_UPPER_CAMEL_CASEs: [],
  },
  effects: {

  },
  reducers: {

  },
};

export default Model;
