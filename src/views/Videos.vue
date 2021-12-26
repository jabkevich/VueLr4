<template>


    <div class="videoContent">
      <HeaderOfCabinet/>
      <iframe :src="this.allVideos[this.$route.params.id]?.link"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
              class="video"
      ></iframe>
      <FooterOfCabinet/>
    </div>

</template>

<script>
import HeaderOfCabinet from "@/components/HeaderOfCabinet";
import  FooterOfCabinet from "@/components/FooterOfCabinet";
export default {
  name: "Videos",
  components: {
    FooterOfCabinet,
    HeaderOfCabinet
  },
  props: {

  },
  mounted() {
    this.$store.dispatch("loadVideos")
  },
  computed: {
    allVideos(){
      return this.$store.getters.allVideos;
    }
  },
}
</script>

<style scoped>

</style>