<template>
  <div class="errorContainer">
    <HeaderOfCabinet/>
    <div class="error">
      <img src="../assets/error.jpg" class="errorImg"/>
    </div>
    <FooterOfCabinet/>
  </div>

</template>

<script>
import HeaderOfCabinet from "@/components/HeaderOfCabinet";
import  FooterOfCabinet from "@/components/FooterOfCabinet";
export default {
  name: "Error",
  components: {
    FooterOfCabinet,
    HeaderOfCabinet
  },
}
</script>

<style scoped>

</style>