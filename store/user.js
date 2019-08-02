export const state = {
  userInfo: {
      token:"",
      user: {}
  }
}
// 同步修改数据
export const mutations = {
    // data是使用该方法时传入的数据
  setUserInfo(state, data) {
      state.userInfo = data;
  },
//   清除用户数据
  clearUserInfo(state) {
    state.userInfo = {
        token:"",
        user:{}
    }
  }
}

export const actions = {

}