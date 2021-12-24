<template>
  <HeaderOfCabinet/>
  <!-- картинки -->
  <div class="container-fluid" id="imgBg">
    <div class="row" id="imagesPost">
      <img class="mt-3 mb-3 col-3 mx-auto" v-for="item in axolotels" :key="item" :src="item"/>
    </div>
  </div>

  <FooterOfCabinet/>

</template>

<script>
import  FooterOfCabinet from "@/components/FooterOfCabinet";
import  HeaderOfCabinet from "@/components/HeaderOfCabinet";
export default {
  name: "Images",
  components:{
    HeaderOfCabinet,
    FooterOfCabinet,
  },
  data() {
    return {
      axolotels: []
    };
  },
  async mounted() {
    this.loadPost("axolotl");
    this.loadPost("salamander");
  },
  methods: {
    loadPost: function (query) {
      fetch("https://api.pexels.com/v1/search?query=" + query, {
        headers: {
          Authorization: "563492ad6f91700001000001623d28b6e2b2462b938cc0a3cd1ca298"
        }
      })
          .then(resp => {
            return resp.json()
          })
          .then(data => {
            console.log(data)
            for (let index = 0; index < data.photos.length; index++) {
              this.axolotels.push(data.photos[index].src.original)
            }
            console.log(imagesPost.innerHTML);
          }).catch((error) => {
        console.log("ERROR: " + error);
      });
    }
  }
}

// loadPost("axolotl");
// loadPost("salamander");
</script>

<style scoped>

</style>