<template>
  <section class="container">
     <Header/>
        <Mainview id="mainview"/>
        <Profile id="profile"/>
        <History id="history"/>
        <Skill id="skill"/>
        <Work id="work"/>
      <Footer/>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Mainview from '~/components/Mainview.vue'
import Profile from '~/components/Profile.vue'
import History from '~/components/History.vue'
import Skill from '~/components/Skill.vue'
import Work from '~/components/Work.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Header,
    Mainview,
    Profile,
    History,
    Skill,
    Work,
    Footer,
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
