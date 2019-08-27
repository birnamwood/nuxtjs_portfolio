<template>
  <div class="main">
      <div class="mainview" @click='click'>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>
          <div class="target"></div>

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

export default {
  name: 'Mainview',
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
    }
  },
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
          otationY: 360,
          backgroundColor: 'transparent',
        }, 0.1)
      })
    },
    enter () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 1, {
          y : "+=200px",
        },0.1)
      })
    },
    leave () {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".box", 1, {
          y: "-=200px",
        },0.1)
      })
    },
    change() {
      //メッセージの書き換え
      this.message = this.message2;
    },
  },
    mounted() {

const random = (min, max) => Math.random() * (max - min) + min;

/**
 * 新しい範囲における現在の値を、現在の範囲を元に変換して返す
 * map(a, b, c, d, e)   aを範囲b-cから別の範囲d-eへ変換する
 * @param value {Number}
 * @param fromMin {Number} 変換前の最小
 * @param fromMax {Number} 変換前の最大
 * @param toMin {Number} 変換後の最小
 * @param toMax {Number} 変換後の最大
 */
const map = (value, fromMin, fromMax, toMin, toMax) => {

  let result = 0;

  result = (value <= fromMin)
    ? toMin : (value >= fromMax)
      ? toMax : (() => {

        let ratio = (toMax - toMin) / (fromMax - fromMin);
        return (value - fromMin) * ratio + toMin;

      })();

  return result;

};


class smoothMove {

  constructor(target, speed = 2, wrapWidth = window.innerWidth, wrapHeight = window.innerHeight) {
    this.target = target;

    // 角度
    this.angle = 0;
    // スピード
    this.speed = speed;

    // 中心の座標
    this.center = {
      x: wrapWidth / 2 - this.target.width() / 2,
      y: wrapHeight / 2 - this.target.height() / 2
    };

    // 動く範囲を円の半径で表現
    // この倍の値(直径)が移動範囲になる
    this.radius = window.innerHeight / 4;

    return this;

  }

  /**
   * ラジアンに変換する
   * @param angle
   * @returns {number}
   */
  getRadian(angle) {

    return angle * Math.PI / 180;

  }

  /**
   * アニメーションを始める
   */
  play() {

    /**
     * 円周上に配置するための値
     * @type {number}
     * @private
     */
    let _angle = 0;

    this.target.each((i, el) => {

      _angle = this.angle + (360 / this.target.length) * i;

      let x = this.center.x + Math.sin(this.getRadian(_angle)) * this.radius;
      let y = this.center.y + Math.cos(this.getRadian(_angle)) * this.radius;

      TweenMax.set(el, {
        x: x,
        y: y,
        z: Math.sin(this.getRadian(this.angle)) * this.radius * 2,
        // scale: map(Math.sin(this.getRadian(this.angle + i * this.radius)), -1, 1, 1, 1.5),
        // rotationY: map(Math.cos(this.getRadian(this.angle + i * this.radius)), -1, 1, 1, 360),
        // rotationZ: map(Math.sin(this.getRadian(this.angle + i * this.radius)), -1, 1, 1, 360),
        backgroundColor: `hsla(${this.angle + (360 / this.target.length) * i}, 80%, 70%, 1)`
      });

    });

    // アニメーションで使用する角度を進める量
    // つまり、速度
    this.angle += this.speed;
    requestAnimationFrame(() => this.play() );

  }

}

let anim = new smoothMove($('.target'));
anim.play();

    }, //////////////////////////////
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mainview {
  height: 100vh;
  width: 100%;
  margin-top: 75px;
  margin-bottom: 45px;
  background-color: black;
  /* background-image: url("../assets/main.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
}

.target {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.maintext {
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 40vh;
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
  .mainview {
    width: 100%;
  }
  .maintext {
    width: 100%;
    font-size: 30px;
  }
  .target {
    top: -10%;
    left: 0%;
  }
}

@media (max-width: 480px) {
  .mainview {
    width: 100%;
    margin-top: 50px;
  }
  .maintext {
    width: 100%;
    font-size: 24px;
  }
}
</style>
