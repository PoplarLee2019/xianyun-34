<template>
  <header>
    <div class="mian">
      <el-row type="flex" justify="space-between">
        <!-- logo -->
        <div class="logo">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <!-- 菜单 -->
        <el-row type="flex" class="navs">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
        <!-- 登录注册 -->
        <div v-if="!$store.state.user.userInfo.token" class="login">
          <nuxt-link to="/user/login">登录</nuxt-link>
          <i>|</i>
          <nuxt-link to="/user/login">注册</nuxt-link>
        </div>
        <!-- 登录后 -->
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
               {{$store.state.user.userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i> 
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </div>
  </header>
</template>
<script>
export default {
  mounted(){
        // console.log( this.$store.state.user.userInfo.user.nickname)
    },
  methods: {
    handleLogout() {
      this.$store.commit("user/clearUserInfo");
    }
  }  
};
</script>
<style lang="less" scoped>
header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 3px 3px #eee;
  .mian {
    width: 1000px;
    margin: 0 auto;
    .logo {
      margin-top: 10px;
      img {
        width: 156px;
        height: 43px;
        display: block;
      }
    }
    .navs {
      flex: 1;
      margin-left: 20px;
      a {
        display: block;
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;

        &:hover {
          color: #409eff;
          border-bottom: 5px solid #409eff;
        }
      }
      .nuxt-link-exact-active {
        background: #409eff;
        color: #fff;

        &:hover {
          color: #fff;
        }
      }
    }
    .login {
      a {
        font-size: 12px;
        color: #666;
        &:hover {
          color: #409eff;
          text-decoration: underline;
        }
      }
      i {
        font-size: 14px;
        color: #666;
      }
    }
  }
  .el-dropdown-link {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>

