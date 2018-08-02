import * as loginServices from '../services/home'

export default {
  namespace: 'home',
  state: {
    count: {},
    customerPer: [],
    supplierPer: [],
    logistics: [],
    trend: {},
    countLoading: false,
    customerLoading: false,
    supplierLoading: false
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/') {
          dispatch({type: 'count', payload: query})
          dispatch({type: 'customerPer', payload: query})
          dispatch({type: 'supplierPer', payload: query})
          dispatch({type: 'logistics', payload: query})
          dispatch({type: 'trend', payload: query})
        }
      })
    },
  },

  effects: {
    * count({payload: {flag = '1'}}, {call, put}) {
      yield put({type: 'save', payload: {countLoading: true}})
      const {data} = yield call(loginServices.count, {flag})
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            count: data.data.count
          }
        })
      }
      yield put({type: 'save', payload: {countLoading: false}})
    },
    * customerPer({payload: {flag = '1'}}, {call, put}) {
      yield put({type: 'save', payload: {customerLoading: true}})
      const {data} = yield call(loginServices.customerPer, {flag})
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            customerPer: data.data.list
          }
        })
      }
      yield put({type: 'save', payload: {customerLoading: false}})
    },
    * supplierPer({payload: {flag = '1'}}, {call, put}) {
      yield put({type: 'save', payload: {supplierLoading: true}})
      const {data} = yield call(loginServices.supplierPer, {flag})
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            supplierPer: data.data.list
          }
        })
      }
      yield put({type: 'save', payload: {supplierLoading: false}})
    },
    * logistics({payload}, {call, put}) {
      const {data} = yield call(loginServices.logistics)
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            logistics: data.data.list
          }
        })
      }
    },
    * trend({payload: {flag = '1'}}, {call, put}) {
      const {data} = yield call(loginServices.trend, {flag})
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            trend: data.data.list
          }
        })
      }
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },
}