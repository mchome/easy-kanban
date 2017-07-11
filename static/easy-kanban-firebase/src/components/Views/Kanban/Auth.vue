<template>
  <div class="auth-container">
    <div class="auth-card" :class="{'logged-in': logged_in}">
      <i v-if="!picture_url.length" class="auth-picture material-icons">account_circle</i>
      <img v-if="picture_url.length" class="auth-picture" src="picture_url">

      <div class="login-card" v-if="!logged_in">
        <input type="text" v-model="login.account" placeholder="Account" spellcheck="false">
        <input type="text" v-model="login.password" placeholder="Password" spellcheck="false">
        <div class="submit-btn"><p>Login</p></div>
      </div>
      <!--<div class="signup-card" v-if="!logged_in">
        <input type="text" v-model="signup.account" placeholder="Account" spellcheck="false">
        <input type="text" v-model="signup.password" placeholder="Password" spellcheck="false">
        <div class="submit-btn"><p>Signup</p></div>
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
  height: 80px;
  width: 80px;
  font-size: 80px;
  cursor: default;
  margin: 1.6rem 0;
}
.auth-card > i {
  color: #35495E;
}
.auth-card {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 50%;
  min-width: 15rem;
  min-height: 18rem;
  background-color: white;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.login-card, .signin-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  align-items: center;
}
.login-card input:nth-child(1) {
  margin-top: -0.5rem;
}
.login-card input, .signin-card input {
  margin: 0.6rem 0;
  border: 0px;
  border-bottom: 1px solid #bbbbbb;
  font-size: 1.2rem;
  width: 100%;
  color: green;
  padding-top: 1rem;
  margin: 0.3rem 0;
}
.login-card input::-webkit-input-placeholder, .signin-card input::-webkit-input-placeholder {
  position: relative;
  top: 0;
  font-weight: lighter;
  transition: all 0.2s;
}
.login-card input:focus::-webkit-input-placeholder, .signin-card input:focus::-webkit-input-placeholder {
  position: relative;
  top: -1.2rem;
  z-index: 1;
  font-size: 0.8rem;
  font-weight: normal;
  transition: all 0.2s;
  color: #35495E;
}
.login-card input:focus, .signin-card input:focus {
  outline: none;
}
.submit-btn {
  margin-top: 1rem;
  width: 6rem;
  height: 2rem;
  background-color: #35495E;
  color: white;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-btn p {
  font-size: 0.85rem;
}
.logged-in {
  background-color: transparent;
  box-shadow: none;
}
</style>
