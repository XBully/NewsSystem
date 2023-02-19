import axios from 'axios';
import { getDvaApp } from 'umi';

axios.defaults.baseURL = 'http://localhost:5000';

setTimeout(() => {
  let { dispatch } = getDvaApp()?._store;
  if (dispatch !== undefined) {
    axios.interceptors.request.use(
      function (config) {
        // 显示loading;
        dispatch({
          type: 'LoadingModel/changeLoading',
          payload: true,
        });
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      function (response) {
        // 隐藏loading
        dispatch({
          type: 'LoadingModel/changeLoading',
          payload: false,
        });
        return response;
      },
      function (error) {
        //隐藏loading
        dispatch({
          type: 'LoadingModel/changeLoading',
          payload: false,
        });
        return Promise.reject(error);
      },
    );
  }
}, 600);

export default axios;
