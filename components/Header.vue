<template>
<header>
   <a href="" class="title" @click="titleclick">Top</a>

    <div class="nav">
      <a href="" class="menu p-menu" @click="profileclick">Profile</a>
      <a href="" class="menu h-menu" @click="historyclick">History</a>
      <a href="" class="menu s-menu" @click="skillclick">Skill</a>
      <a href="" class="menu w-menu" @click="workclick">Work</a>
    </div>
  </header>
</template>

<script>
import SmoothScroll from 'vue-smoothscroll'

export default {
  methods: {
    titleclick() {
      requestAnimationFrame(() => {
        TweenMax.to(".title", 0.5, {
          lotation: 360,
          scale: 1.5,
          onComplete : function(){
            TweenMax.to(".title", 0.5, {
              scale: 1,
            })
          }
        })
      })
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainview')
      )
    },
    profileclick() {
      requestAnimationFrame(() => {
        TweenMax.to(".p-menu", 0.5, {
          scale: 1.5,
          onComplete : function(){
            TweenMax.to(".p-menu", 0.5, {
              scale: 1,
            })
          }
        })
      })
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#profile')
      )
    },
    historyclick() {
      requestAnimationFrame(() => {
        TweenMax.to(".h-menu", 0.5, {
          scale: 1.5,
          onComplete : function(){
            TweenMax.to(".h-menu", 0.5, {
              scale: 1,
            })
          },
        })
      })
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#history')
      )
    },
    skillclick() {
      requestAnimationFrame(() => {
        TweenMax.to(".s-menu", 0.5, {
          scale: 1.5,
          onComplete : function(){
            TweenMax.to(".s-menu", 0.5, {
              scale: 1,
            })
          },
        })
      })
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skill')
      )
    },
    workclick() {
      requestAnimationFrame(() => {
        TweenMax.to(".w-menu", 0.5, {
          scale: 1.5,
          onComplete : function(){
            TweenMax.to(".w-menu", 0.5, {
              scale: 1,
            })
          },
        })
      })
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#work')
      )
    },
  }
}

</script>
import {TweenMax, Expo, Elastic} from 'gsap'
<style scoped>

header {
  top: 0;
  position: fixed;
  font-family: fantasy;
  background-color: rgb(218, 226, 218,0.7);
  width: 100%;
  font-size: 24px;
  text-align: center;
  box-shadow: 0 3px 0 0 #b4afaf, 0 1px 1px 0 #e9e9e9;
  transform: translateY(-3px);
  padding: 1em 1em 0.5em;
  color: #0f2018;
  z-index: 9999;
}

.title {
  float:left;
  color: inherit;
  text-decoration: none;
}

.nav {
  float: right;
}

.menu {
  float:left;
  color: inherit;
  text-decoration: none;
  padding: 0 1em;
}

@media (max-width: 640px) {
  header {
    font-size: 24px;
  }
  .menu {
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  header {
    height: 50px;
    font-size: 16px;
  }
  .menu {
    padding: 0 10px;
  }
}
</style>
