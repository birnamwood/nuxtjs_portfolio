<template>
  <div class="skill">
      <div class="skill-box">
          <div class="skill-title">
            <i class="fas fa-tools" > Skill</i>
          </div>
          
          <no-ssr>
          <carousel :per-page="1"
                    :speed="1000">
            <slide>
              <h2 class="tool-title">技術（実務経験あり）</h2>
              <table class="tool-table">
                <ul class="tool-list">
                  <li v-for="(tool,index) in tools" :key="index">
                    {{tool.name}}
                  </li>
                </ul>
              </table>
            </slide>

            <slide>
              <h2 class="tool-light-title">技術（勉強中）</h2>
              <table class="tool-light-table">
                <ul class="tool-light-list">
                  <li v-for="(toollight,index) in toollights" :key="index">
                    {{toollight.name}}
                  </li>
                </ul>
              </table>
           </slide>

            <slide>
              <h2 class="qualification-title">資格</h2>
              <table class="qualification-table">
                <ul class="qualification-list">
                  <li v-for="(qualification,index) in qualifications" :key="index">
                      {{qualification.name}}
                  </li>
                </ul>
              </table>
            </slide>
          </carousel>
          </no-ssr>

      </div>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  name: 'skill',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      qualifications: [
        { name: "基本情報処理技術者"},
        { name: "3級知的財産管理技能士"},
        { name: "日商簿記2級"},
      ],
      tools: [
        { name: "RPG Ⅲ, Ⅳ"},
        { name: "VB6"},
        { name: "VB.NET"},
        { name: "C#.NET"},
        { name: "Windows"},
        { name: "CENTOS 7"},
        { name: "VMware/vSphere"},
        { name: "HYPER-V"},
        { name: "Readmine"},
      ],
      toollights: [
        { name: "HTML/CSS"},
        { name: "javaScript/Vue.js"},
        { name: "Python/Django"},
        { name: "Ruby/Ruby on Rails"},
        { name: "Docker/Docker-compose"},
        { name: "SQL"},
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill {
  width: 100%;
  padding-bottom: 50px;
}

.skill-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
}
.skill-title {
  font-size: 60px;
}

.qualification-title {
  margin-bottom: 10px;
}
.qualification-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
.qualification-list {
  width: 50%;
  margin: auto;
  padding: 10px;
}
.qualification-list li {
  padding: 10px;
}

.tool-title {
  margin-bottom: 10px;
}
.tool-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
  margin-bottom: 10px;
}
.tool-list {
  margin: auto;
}
.tool-list li {
  width: 45%;
  margin: 10px;
  float: left;
}

.tool-light-title {
  margin-bottom: 10px;
}
.tool-light-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
.tool-light-list {
  margin: auto;
}
.tool-light-list li {
  width: 45%;
  margin: 10px;
  float: left;
}

@media (max-width: 640px) {
  .qualification-list {
    width: 60%;
}
}

</style>
