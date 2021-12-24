<template>
<div>
  <iframe :src="this.allVideos[this.$route.params.id]?.src"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""></iframe>
</div>
</template>

<script>
export default {
  name: "Videos",
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