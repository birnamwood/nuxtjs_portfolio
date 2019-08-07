<template>
  <section class="container">
     <Header/>
        <Mainview id="mainview"/>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Mainview from '~/components/Mainview.vue'

export default {
  components: {
    Header,
    Mainview,
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
