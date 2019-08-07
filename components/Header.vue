<template>
<header>
   <a href="" @click="titleclick" class="title">Top</a>

    <nav>
      <a href="" @click="profileclick" class="menu">Profile</a>
      <a href="" class="menu">History</a>
      <a href="" class="menu">Skill</a>
      <a href="" class="menu">Work</a>
    </nav>
  </header>
</template>

<script>

export default {
  methods: {
    titleclick() {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainview')
      )
    },
    profileclick() {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#profile')
      )
    },

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

nav {
  float: right;
}

.menu {
  color: inherit;
  text-decoration: none;
  padding: 1em 1em 0.5em;
}

</style>
