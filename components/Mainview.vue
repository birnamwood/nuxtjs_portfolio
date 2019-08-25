<template>
  <div class="main">
      <div class="mainview">
          <div class="maintext" @click='click'>
              <div class="box box0">{{message[0]}}</div>
              <div class="box box1">{{message[1]}}</div>
              <div class="box box2">{{message[2]}}</div>
              <div class="box box3">{{message[3]}}</div>
              <div class="box box4">{{message[4]}}</div>
              <div class="box box5">{{message[5]}}</div>
              <div class="box box6">{{message[6]}}</div>
              <div class="box box7">{{message[7]}}</div>
              <div class="box box8">{{message[8]}}</div>
              <div class="box box9">{{message[9]}}</div>
              <div class="box box0">{{message[10]}}</div>
              <div class="box box1">{{message[11]}}</div>
              <div class="box box2">{{message[12]}}</div>
              <div class="box box3">{{message[13]}}</div>
              <div class="box box4">{{message[14]}}</div>
              <div class="box box5">{{message[15]}}</div>
              <div class="box box6">{{message[16]}}</div>
              <div class="box box7">{{message[17]}}</div>
              <div class="box box8">{{message[18]}}</div>
              <div class="box box9">{{message[19]}}</div>
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
      message:  ["_", "P", "l", "e", "a", "s", "e", "_", "C", "l",
                 "i", "c", "k", "_", "H", "e", "r", "e", "!", "_"],
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
          y: -50,
          repeat: -1,
          yoyo: true,
          boxShadow:"0px 0px 50px black",
          backgroundColor: 'transparent',
          // backgroundColor: 'transparent',
        }, 0.3)
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 0.5, {
          backgroundColor: 'green',
        },0.3)
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 0.5, {
          backgroundColor: 'blue',
          y: 50,
          repeat: -1,
          yoyo: true,
        },0.3)
      })
    },
    change() {
      //メッセージの書き換え
      console.log("test")
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
  display: inline-block;
  margin-top: 45vh;
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
