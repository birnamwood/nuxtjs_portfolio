<template>
  <div class="main">
      <div class="mainview" @click='click'>
          <div class="maintext" >
              <div class="box">&nbsp;{{message[0]}}</div>
              <div class="box">&nbsp;{{message[1]}}</div>
              <div class="box">&nbsp;{{message[2]}}</div>
              <div class="box">&nbsp;{{message[3]}}</div>
              <div class="box">&nbsp;{{message[4]}}</div>
              <div class="box">&nbsp;{{message[5]}}</div>
              <div class="box">&nbsp;{{message[6]}}</div>
              <div class="box">&nbsp;{{message[7]}}</div>
              <div class="box">&nbsp;{{message[8]}}</div>
              <div class="box">&nbsp;{{message[9]}}</div>
              <div class="box">&nbsp;{{message[10]}}</div>
              <div class="box">&nbsp;{{message[11]}}</div>
              <div class="box">&nbsp;{{message[12]}}</div>
              <div class="box">&nbsp;{{message[13]}}</div>
              <div class="box">&nbsp;{{message[14]}}</div>
              <div class="box">&nbsp;{{message[15]}}</div>
              <div class="box">&nbsp;{{message[16]}}</div>
              <div class="box">&nbsp;{{message[17]}}</div>
              <div class="box">&nbsp;{{message[18]}}</div>
              <div class="box">&nbsp;{{message[19]}}</div>
          </div>
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
      message:  [ "", "", "", "", "", "", "", "C", "l", "i",
                 "c", "k", "!", "", "", "", "", "", "", ""],
      message2: ["W", "e", "l", "c", "o", "m", "e", "T", "o", "M",
                 "y", "P", "o", "r", "t", "f", "o", "l", "i", "o"]
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
        TweenMax.staggerTo(".box", 0.5, {
          backgroundColor: 'transparent',
          color: 'white'
        }, 0.1)
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 0.5, {
          scale: 1.5,
          opacity: 100,
        },0.1)
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 0.5, {
          scale: 1,
          opacity: 0,
        },0.1)
      })
    },
    change() {
      //メッセージの書き換え
      this.message = this.message2;
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
  margin-top: 45vh;
  display: inline-block;
  font-size: 36px;
  font-family: fantasy;
}
.box {
  width: 5%;
  height: 100%;
  float: left;
  background-color: rgb(200,250,200,0.5);
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
