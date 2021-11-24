import * as ExpressService from './../services/example.js'
export default {

  namespace: 'express',

  state: {
    expressInfo :''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *find({ payload :{value} }, { call, put }) {  // eslint-disable-line
      
      const {body,err} = yield call(ExpressService.query,value)
      if(err){
        
      }else{
        yield put({
          type:'save',
          payload:{
            value:body.expressInfo
          }
        })
      }
      
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
