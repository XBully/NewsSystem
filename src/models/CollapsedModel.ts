export default {
  state: {
    collapsed: false,
  },
  reducers: {
    changeCollapsed(prevState: any,{payload}:any) {
      return {
        ...prevState,
        collapsed: payload,
      }
    },
  },
};
