<template>
  <HeaderOfCabinet/>
  <!-- картинки -->
  <div class="container-fluid" id="imgBg">
    <div class="row axolotls" id="imagesPost">
      <a v-for="(item, i) in axolotls" :key="i"  class=" mb-3 mx-auto" :href="`/image/` + i" >
        <img :src="item" class="axolotl"/>
      </a>

    </div>
  </div>

  <FooterOfCabinet/>

</template>

<script>
import  FooterOfCabinet from "@/components/FooterOfCabinet";
import  HeaderOfCabinet from "@/components/HeaderOfCabinet";
import {mapMutations} from "vuex";
export default {
  name: "Images",
  components:{
    HeaderOfCabinet,
    FooterOfCabinet,
  },
  data() {
    return {
    };
  },
  async mounted() {
    this.loadPost("axolotl");
    this.loadPost("salamander");
  },
  methods: {
    ...mapMutations(["loadPost"]),
  },
  computed: {
    axolotls() {
      return this.$store.getters.getAxolotls;
    },
  }
}


</script>

<style scoped>

</style>