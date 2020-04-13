
import { Effect } from 'IdentityRole/src/node_modules/dva';
import { Reducer } from 'IdentityRole/src/node_modules/redux';
import { IdentityRoleDto } from './data';
import { queryRoles } from './service';


export interface IdentityRoleModelState {
  roles: IdentityRoleDto[]
}

export interface IdentityRoleModelType {
  namespace: 'identityRole';
  state: IdentityRoleModelState;
  effects: {
    getRoles: Effect;
  };
  reducers: {
    saveRoles: Reducer<IdentityRoleModelState>;
  };
}

const RoleModel: IdentityRoleModelType = {
  namespace: 'identityRole',

  state: {
    roles: []
  },

  effects: {
    *getRoles({ payload }, { call, put }) {
      const response = yield call(queryRoles, payload);
      yield put({
        type: 'saveRoles',
        payload: response.items,
      })
    }

  },

  reducers: {
    saveRoles(state, { payload }) {
      return {
        ...state,
        roles: payload
      };
    }
  },
};

export default RoleModel;
