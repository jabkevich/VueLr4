<template>
  <div id="signIn">

  <!-- форма регистрации -->
  <form>
    <a href="/" class="btn btn-dark btn-lg m-3 padding">back</a>
    <div class="container-fluid padding" id="registrationForm">
      <h1 class="display-3 text-center">registration</h1>
      <!-- логин -->
      <div class="form-group m-3">
        <label for="inputEmail">login*</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="enter your email or phone number" v-model="loginText">
      </div>
      <!-- пароль -->
      <div class="form-group m-3">
        <label>password*</label>
        <div class="input-group" id="show_hide_password">
          <input class="form-control" type="password" placeholder="enter your password" v-model="password">
        </div>
      </div>
      <!-- подтверждение пароля -->
      <div class="form-group m-3">
        <label>confirm password*</label>
        <div class="input-group" id="show_hide_password_confirm">
          <input class="form-control" type="password" placeholder="enter your password again">
        </div>
      </div>
      <!-- регистрация -->
      <a type="submit" class="btn btn-outline-light btn-lg mr-3 mt-3" id="signInBtn" v-on:click = "submit">create
        account</a>
    </div>
  </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      loginText: "",
      password: "",
    }
  },
  methods: {

    ...mapMutations(["login", "loadUser", "registerUser"]),
    submit: function (event){
      event.preventDefault()
      //window.location.href = 'https://www.yoursite.com/blog';

      this.registerUser({username:this.loginText, password:this.password})
    },

    // login: function (val, oldVal) {
    //
    //
    // }
  },
}
</script>

<style scoped>

</style>