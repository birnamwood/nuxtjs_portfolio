<template>
  <div class="workbox">
    <div class="content-box clearfix">
      <h2>{{item.name}}</h2>
      <div class="imagebox">
        <img v-bind:src= "item.image" />
      </div>
      <div class="content">
        <p>URL: <a v-bind:href="item.url" target="_blank">{{item.url}}</a><br></p>
        <p>SOURCE: <a v-bind:href="item.src" target="_blank">{{item.src_site}}</a><br></p>
        <br>
        <p>使用言語等：{{item.skill}}</p><br>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Workbox',
  props: {
    item: {
      type: Object,
    }
  },
}
</script>

<style scope>

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.workbox {
  width: 100%;
  padding-bottom: 50px;
}
.content-box {
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
 h2 {
  padding: 20px;
}

.imagebox {
  float:left;
  width: 50%;
  margin-bottom: 20px;
}
.imagebox img {
  width: 60%;
}

.content {
  margin: auto;
  /* float: left; */
  width: 50%;
  height: 100%;
  text-align: left;
  display: inline-block;
}
</style>