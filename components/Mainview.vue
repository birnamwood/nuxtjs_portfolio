<template>
  <div class="main">
      <div class="mainview">
        <transition appear>
          <p  v-show="show" class="maintext">{{message}}</p>
        </transition>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Mainview',
  data() {
    return {
      message: 'Welcome to My Portfolio',
      show: true,
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
  background-color: rgb(200,250,200,0.5);
  display: inline-block;
  margin-top: 45vh;
  font-size: 36px;
  font-family: fantasy;
}

.v-enter-active,
.v-leave-active {
      transition: 5s ease-out;
}

.v-enter,
.v-leave-to {
      opacity: 0;
      transform: translateY(-100px);
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
