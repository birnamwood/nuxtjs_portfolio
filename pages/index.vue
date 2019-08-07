<template>
  <section class="container">
     <Header/>
        <Mainview id="mainview"/>
        <Profile/>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Mainview from '~/components/Mainview.vue'
import Profile from '~/components/Profile.vue'



export default {
  components: {
    Header,
    Mainview,
    Profile,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
