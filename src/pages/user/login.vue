<template>
 <div class="login">
   <div class="login-box">
     <div class="header">
       <img src="../../assets/logo.png" alt="">
       <span>欢迎 {{loginState === 1 ? '登录':'注册'}}</span>
       <div class="input-box">
         <!-- //登录名称 -->
         <div class="input-item">
           <label for="username">名字：</label>
           <a-input  id ='username' class='input' type='text' v-model='user.userName'> 
             <a-icon slot='prefix' type='user'></a-icon>
           </a-input>
         </div>
         <!-- //密码 -->
         <div class="input-item">
           <label for="password">密码：</label>
           <a-input  id ='password' class='input' type='password' v-model='user.password'> 
             <a-icon slot='prefix' type='lock'></a-icon>
           </a-input>
         </div>
        <!-- //提交按钮 -->
         <div class="btn-box">
            <a-button  style ='margin-right: 20px;' type='primary' @click="login">登录</a-button>
            <a-button @click="register">注册</a-button>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loginState:1,//1-登陆  2-注册
      user:{
        userName:'',
        password:''
      }
    };
  },
  computed: {
    ...mapGetters(["getUserName"]),
  },
  methods:{
    login(){
      this.$router.replace({
        name:'home'
      })     
    },
    register(){
    this.$router.replace({
        name:'home'
      }) 
    }
  }
}

</script>

<style lang="less">
@import "./index";
</style>
