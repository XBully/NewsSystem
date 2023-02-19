export default {
  state: {
    isLoading: false,
  },
  reducers: {
    changeLoading(prevState: any, {payload}: any) {
     return{
      ...prevState,
      isLoading: payload,
     }
    },
  },
};
