<template>
  <div class="main">
      <div class="mainview" @click='click'>
          <p class="maintext" v-if='entered'>{{message}}</p>
          <p class="maintext" v-if='!entered'>{{message2}}</p>
       </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  name: 'Mainview',
  data() {
    return {
      message: 'Welcome to My Portfolio',
      message2: 'Click!',
    }
  },
  watch: {
    entered(val) {
      this.flash()
      val ? this.enter() : this.leave()
    }
  },
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  },
  methods: {
    ...mapMutations({ click: 'click'}),
    flash () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs, 1, {
          ease: Expo.easeIn,
          scale: 2
        })
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs, 1, {
          ease: Expo.easeOut,
          scale: 1.5
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs, 1, {
          ease: Expo.easeOut,
          scale: 1.0
        })
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  height: 100vh;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 45px;
  margin: auto;
}
.mainview {
  height: 100%;
  background-image: url("../assets/main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.maintext {
  width: 100%;
  color: white;
  text-align: center;
  background-color: rgb(200,250,200,0.5);
  display: inline-block;
  margin-top: 45vh;
  font-size: 36px;
  font-family: fantasy;
}

@media (max-width: 640px) {
  .main {
    height: 700px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 0px;
    margin: auto;
  }
  .maintext {
    width: 100%;
    margin-top: 300px;
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .main {
    width: 100%;
    padding-bottom: 0px;
    margin: auto;
  }
  .maintext {
    width: 100%;
    font-size: 24px;
  }
}
</style>
