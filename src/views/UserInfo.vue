<template>
  <HeaderOfCabinet/>
  <div class="userInfo" v-if="getUserData && Object.keys(userData).length > 0">
      <div class="mb-3 userFields" v-for="(item, i) in Object.keys(getUserData)" :key="i">
        <span class="userField input-group-text mr-3" id="basic-addon3">{{item}}</span>
        <input type="text" class="userField form-control" id="basic-url" aria-describedby="basic-addon3" v-model="this.userData[item]">
      </div>
    <button class="btn btn-outline-light btn-lg btn-block"  id="signInBtn" type="submit" v-on:click = "submit">Изменить</button>
  </div>
  <FooterOfCabinet/>
</template>

<script>
import HeaderOfCabinet from "@/components/HeaderOfCabinet";
import FooterOfCabinet from "@/components/FooterOfCabinet";
import {mapMutations} from "vuex";

export default {

  name: "UserInfo",
  data() {
    return {
      userData: {}
    };
  },
  components:{
    HeaderOfCabinet,
    FooterOfCabinet,
  },
  computed: {
    getUserData(){
      return this.$store.getters.userData
    },
  },
  methods: {
    ...mapMutations(["changeUser"]),
    submit: function (event){
      event.preventDefault()
      this.changeUser(this.userData)
    },

  },
  watch: {
    getUserData: function (){
      console.log(this.getUserData)
      if(this.getUserData &&  Object.keys(this.getUserData).length > 0) {
        Object.keys(this.getUserData).forEach(key=>{
          console.log(key)
          this.userData[key] = this.getUserData[key]
        })
        console.log(this.userData)
      }


    }
  }
}
</script>

<style scoped>

</style>