<template>
  <section class="container">
     <Header/>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
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
