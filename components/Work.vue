<template>
  <div class="work">
      <div class="work-box">
          <div class="work-title">
            <i class="fas fa-tools" > Work</i>
          </div>
          <!-- ボックス -->
          <Workbox v-for="work in works" :key="work.name" :item="work" />
      </div>
  </div>
</template>

<script>
import Workbox from './Workbox.vue'
import PortfolioImage from "@/assets/portfolio.png"
import NoImage from "@/assets/no_image.png"

export default {
  name: 'work',
  components: {
    Workbox,
  },
  data() {
    return {
      works: [
        {
          name: "ポートフォリオ",
          image: PortfolioImage,
          url: "",
          src_site: "Github",
          src: "https://github.com/birnamwood/vuejs_portfolio",
          skill: "HTTPS/CSS/Vue.js",
          text: "ポートフォリオ公開用サイトです。使用ライブラリはvue-smoothscrollとvue-carouselです。",
        },
        {
          name: "検査結果照会システム",
          image: NoImage,
          url: "",
          src_site: "",
          src: "",
          skill: "RPG Ⅳ/LongRange/iPhone",
          text: "iPhoneで臨床検査の結果を照会するシステムです。設計からリリースまで一人で担当しました。",
        },
      ],
    }
  }
}
</script>

<style module>
  @import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work {
  width: 100%;
  padding-bottom: 50px;
}

.work-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
}
.work-title {
  font-size: 60px;
  margin-bottom: 20px;
}

</style>