<template>
  <div class="auth-container" :class="{'logged-in-container': logged_in}">
    <div class="auth-card" :class="{'logged-in-card': logged_in}">
      <i v-if="!picture_url.length" @click="toggleDologin" v-on:dblclick="doLogout" class="auth-picture material-icons">account_circle</i>
      <img v-if="picture_url.length" @click="toggleDologin" v-on:dblclick="doLogout" class="auth-picture" :src="picture_url">

      <transition name="fade">
        <div class="login-card" v-if="!logged_in && isDologin">
          <input type="text" v-model="login.email" placeholder="Email" spellcheck="false">
          <input type="password" ref="passwdform" v-model="login.password" placeholder="Password" spellcheck="false">
          <div class="submit-btn" ref="submitbtn" @click="doLogin"><p>Login</p></div>
        </div>
        <div class="signup-card" v-if="!logged_in && !isDologin">
          <input type="text" v-model="signup.email" placeholder="Account" spellcheck="false">
          <input type="password" ref="passwdform" v-model="signup.password" placeholder="Password" spellcheck="false">
          <div class="submit-btn" @click="doSignup"><p>Signup</p></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="popup-msg" v-if="popup.msg.length">{{ popup.msg }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Firebase, getAvatar } from '@/utils'

export default {
  data () {
    return {
      picture_url: '',
      login: {
        email: '',
        password: ''
      },
      signup: {
        email: '',
        password: ''
      },
      isDologin: true,
      popup: {
        msg: ''
      }
    }
  },
  props: ['logged_in'],
  methods: {
    doLogin: function (ev) {
      Firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
        .then(function () {
          this.updateAuth(true)
        }.bind(this))
        .catch(function (ev) { this.popup.msg = ev.message }.bind(this))
    },
    doSignup: function (ev) {
      Firebase.auth().createUserWithEmailAndPassword(this.signup.email, this.signup.password)
        .then(function () {
          this.popup.msg = 'You have successfully registered !'
          this.isDologin = true
        }.bind(this))
        .catch(function (ev) { this.popup.msg = ev.message }.bind(this))
    },
    doLogout: function (ev) {
      Firebase.auth().signOut()
        .then(function () {
          this.updateAuth(false)
        }.bind(this))
    },
    toggleDologin: function () {
      this.isDologin = !this.isDologin
    },
    updateAuth: function (isLogin) {
      if (isLogin) {
        this.$refs.submitbtn.style.background = '#23d160'
        this.$refs.submitbtn.textContent = 'Succeed'
        this.picture_url = getAvatar(this.login.email)
        setTimeout(function () {
          this.$refs.submitbtn.style.background = '#35495E'
          this.$refs.submitbtn.textContent = 'Login'
          this.$emit('update:logged_in', true)
        }.bind(this), 1000)
      } else {
        this.picture_url = ''
        this.$emit('update:logged_in', false)
      }
    },
    addKeybinding: function () {
      setTimeout(function () {
        if (!this.logged_in) {
          this.$refs.passwdform.addEventListener('keypress', function (ev) {
            if (ev.keyCode === 13) {
              if (this.isDologin) {
                this.doLogin()
              } else {
                this.doSignup()
              }
            }
          }.bind(this))
        }
      }.bind(this), 100)
    }
  },
  watch: {
    popup: {
      handler: function () {
        setTimeout(function () {
          this.popup.msg = ''
        }.bind(this), 5000)
      },
      deep: true
    },
    logged_in: function () {
      this.addKeybinding()
      this.login.email = ''
      this.login.password = ''
      this.signup.email = ''
      this.signup.password = ''
    }
  },
  beforeCreate () {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!this.login.password) {
          this.picture_url = getAvatar(user.email)
          this.$emit('update:logged_in', true)
        }
      } else {
        this.picture_url = ''
        this.$emit('update:logged_in', false)
      }
    })
  }
}
</script>

<style>
.auth-container {
  height: 100%;
  min-width: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}
.auth-container .auth-picture {
  height: 80px;
  width: 80px;
  font-size: 80px;
  cursor: default;
  margin: 1.6rem 0;
  position: relative;
  top: 0;
  cursor: pointer;
  border-radius: 50px;
  user-select: none;
  transition: all 1s ease-in-out;
}
.auth-card > i {
  color: #35495E;
}
.auth-card {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 50%;
  min-width: 3rem;
  min-height: 18rem;
  background-color: white;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.login-card, .signup-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  align-items: center;
}
.login-card input:nth-child(1), .signup-card input:nth-child(1) {
  margin-top: -0.5rem;
}
.login-card input, .signup-card input {
  margin: 0.6rem 0;
  border: 0px;
  border-bottom: 1px solid #bbbbbb;
  font-size: 1.2rem;
  width: 100%;
  color: green;
  padding-top: 1rem;
  margin: 0.3rem 0;
}
.login-card input::-webkit-input-placeholder, .signup-card input::-webkit-input-placeholder {
  position: relative;
  top: 0;
  font-weight: lighter;
  transition: all 0.2s;
}
.login-card input:focus::-webkit-input-placeholder, .signup-card input:focus::-webkit-input-placeholder {
  position: relative;
  top: -1.2rem;
  z-index: 1;
  font-size: 0.8rem;
  font-weight: normal;
  transition: all 0.2s;
  color: #35495E;
}
.login-card input:focus, .signup-card input:focus {
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
  transition: all 0.3s;
  user-select: none;
}
.submit-btn:active {
  background-color: rgba(53, 73, 94, 0.8);
}
.submit-btn p {
  font-size: 0.85rem;
}
.logged-in-container {
  min-width: 60px;
  background-color: rgba(53, 73, 94, 0.95);
  transition: all 1s ease-in-out;
}
.logged-in-card {
  background-color: transparent;
  box-shadow: none;
}
.logged-in-card > i {
  color: white;
}
.logged-in-card > i, .logged-in-card > img {
  position: absolute !important;
  top: calc(100vh - 76px) !important;
  transition: all 1s ease-in-out !important;
  width: 40px !important;
  height: 40px !important;
  font-size: 40px !important;
  margin-bottom: 0 !important;
  cursor: pointer !important;
}
.popup-msg {
  position: absolute;
  top: 56px;
  width: 100%;
  height: 2rem;
  background-color: rgba(30, 136, 229, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  user-select: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
