<template>

  <HeaderOfCabinet/>
  <!-- картинка -->
  <figure>
    <div class="fixed-wrap" id="youAxolotl"></div>
  </figure>

  <!-- видео с поиском -->
  <div class="container padding">
    <h2 class="text-center display-4 pb-3">VIDEOS</h2>
    <input class="form-control" id="searchInput" type="text" placeholder="Search.." v-model="searchInput">
    <br>
    <table class="table table-bordered table-striped cards">
      <thead>
      <tr>
        <th class="text-center">TAGS</th>
        <th class="text-center">VIDEO</th>
      </tr>
      </thead>
      <tbody id="videoTable">
      <tr v-for="(item, i) in allVideosOfUser" :key="i">
        <td class="p-5 w-25">
          <a :href="'/videos/' + i">{{ item.tags }}</a>
        </td>
        <td>
          <div class="card pull-right">
            <div class="card-body">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe :src="item.link"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </td>
      </tr>

      </tbody>
    </table>

  </div>

  <!-- карточки с каналами -->
  <div class="container-fluid">
    <div class="text-center alert">
      <div class="col-12">
        <h2 class="display-4">CHANNELS</h2>
      </div>
      <hr>
      <div class="col-12">
        <p class="lead"> More videos about axolotls </p>
      </div>
    </div>
  </div>
  <div class="container padding">
    <div class="row padding">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body cards">
            <h4 class="card-title">iStock</h4>
            <p class="card-text">Axolotl stock videos and footage. Browse 129 axolotl stock videos and clips
              available to use in your projects, or search for aardvark or ostrich to find
              more stock footage
              and b-roll video clips.
            </p>
            <a href="https://www.istockphoto.com/en/search/2/film?phrase=axolotl" class="btn btn-dark">watch</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body cards">
            <h4 class="card-title">Virtual Classroom</h4>
            <p class="card-text">This space will offer a new place to learn more about a variety of topics. They
              may relate to the library itself, current hot topics, or subjects of general
              interest, and will
              continue to grow with new content.</p>
            <a href="https://abilenetx.gov/1030/Axolotl" class="btn btn-dark">watch</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="" class="card-img-top"/>
          <div class="card-body cards">
            <h4 class="card-title">SCIENTIFIC AMERICAN</h4>
            <p class="card-text">Axolotls are used to study cancer development and organ regeneration, but their
              numbers in the wild are dwindling. Conserving wild salamanders could be vital
              for the future of
              this special species.</p>
            <a href="https://www.scientificamerican.com/video/axolotl-saving-a-strange-salamander/"
               class="btn btn-dark">watch</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterOfCabinet/>

</template>

<script>

import  HeaderOfCabinet from "@/components/HeaderOfCabinet";
import  FooterOfCabinet from "@/components/FooterOfCabinet";
export default {
  name: "MyVideos",
  components:{
    HeaderOfCabinet,
    FooterOfCabinet,
  },
  mounted() {
    this.$store.dispatch("getUserData")
  },
  watch: {
    getUserData: function () {
      this.$store.dispatch("getVideosOfUser")
    }
  },
  computed: {

    allVideosOfUser() {
      return this.$store.getters.getAllVideosOfUser;
    },
    getUserData(){

      return this.$store.getters.userData
    },
  }
}
</script>

<style scoped>

</style>