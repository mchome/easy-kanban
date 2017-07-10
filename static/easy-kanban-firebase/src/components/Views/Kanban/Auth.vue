<template>
  <div class="auth-container">
    <div class="auth-card" :class="{'logged-in': logged_in}">
      <i v-if="!picture_url.length" class="auth-picture material-icons">account_circle</i>
      <img v-if="picture_url.length" class="auth-picture" src="picture_url">

      <div class="login-card" v-if="!logged_in">
        <input type="text" v-model="login.account">
        <input type="text" v-model="login.password">
      </div>
      <!--<div class="signup-card" v-if="!logged_in">
        <img src="">
        <input type="text" v-model="signup.account">
        <input type="text" v-model="signup.password">
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picture_url: '',
      login: {
        account: '',
        password: ''
      },
      signup: {
        account: '',
        password: ''
      }
    }
  },
  props: ['logged_in']
}
</script>


<style>
.auth-container {
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.auth-container .auth-picture {
  height: 72px;
  width: 72px;
  font-size: 72px;
  cursor: default;
  margin: 2rem 0;
}
.auth-card {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 50%;
  min-height: 15rem;
  min-width: 15rem;
  background-color: white;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.login-card, .signin-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
}
.login-card > input, .signin-card > input {
  margin: 0.6rem 0;
}
.logged-in {
  background-color: transparent;
  box-shadow: none;
}
</style>
