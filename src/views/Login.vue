<template>
  <div id="signIn">
    <!-- форма авторизации -->
    <form class="needs-validation" novalidate>
      <a href="/" class="btn btn-dark btn-lg m-3">back</a>
      <div class="container-fluid padding" id="authorizationForm">
        <h1 class="display-3 text-center">Login</h1>
        <!-- логин -->
        <div class="form-group m-3">
          <label for="inputEmail">login</label>
          <input  class="form-control" id="inputEmail" placeholder="enter your email or phone number"
                 v-model="loginText" >
        </div>
        <!-- пароль -->
        <div class="form-group m-3">
          <label>password</label>
          <div class="input-group" id="show_hide_password">
            <input class="form-control" type="password" placeholder="enter your password" v-model="password">
          </div>
        </div>

        <!-- запомнить -->
        <div class="custom-control custom-checkbox custom-checkbox m-3">
          <input type="checkbox" class="custom-control-input custom-control-input" id="customCheck" v-model="loginText">
          <label class="custom-control-label" for="customCheck">remember me</label>
        </div>
        <!-- вход -->
<!--        <button class="btn btn-outline-light btn-lg" id="signInBtn" @:click="counter++">sign in</button>-->

        <button class="btn btn-outline-light btn-lg"  id="signInBtn" type="submit" v-on:click = "submit">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import Sign from "../components/Sign"
export default {
  name: "Login",
  data() {
    return {
      searchInput: "",
      loginText: "",
      password: "",
      counter: 0,
    };
  },
  methods: {

    ...mapMutations(["login", "loadUser"]),
    submit: function (event){
      event.preventDefault()
      //window.location.href = 'https://www.yoursite.com/blog';

      this.login({username:this.loginText, password:this.password})
    },

    // login: function (val, oldVal) {
    //
    //
    // }
  },
  watch: {
    sign: function (event){
      event.preventDefault()
      this.counter++;
      console.log("alo")
      this.login({login:this.loginText, password:this.password})
      // login: function (val, oldVal) {
      //   console.log("AYsd")
      //   // this.login({login:this.loginText, password:this.password})
      // }
    },
  },
  components: {

  },
}
</script>

<style scoped>

</style>