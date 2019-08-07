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
  name: 'mainview',
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
  height: 1000px;
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
  margin-top: 400px;
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
</style>
