<template>
  <div class="main">
      <div class="mainview">
          <p id="maintext" @click='click'>{{message}}</p>
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
      message: 'Click!',
    }
  },
  watch: {
    entered(val) {
      this.change()
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
        TweenMax.to("#maintext", 1, {
          rotation: 360,
          // backgroundColor: 'transparent',
        })
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo("#maintext", 1, {
          y: -100,
          repeat: -1,
          color: 'black',
          yoyo: true,
        })
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo("#maintext", 1, {
          y: 100,
          repeat: -1,
          yoyo: true,
        })
      })
    },
    change() {
      this.message = "Welcome to my Portfolio"
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

#maintext {
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
  #maintext {
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
  #maintext {
    width: 100%;
    font-size: 24px;
  }
}
</style>
