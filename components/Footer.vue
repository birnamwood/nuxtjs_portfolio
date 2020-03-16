<template>
<footer>
    <nav>
      <p>© 2019</P>
      <a href="" @click="push">Push</a>
    </nav>
  </footer>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    push() {
      var params = {
      method: 'post',
      url: 'https://onesignal.com/api/v1/notifications',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ${process.env.ONESINGAL_API_KEY}'
      },
      data: {
        app_id: '45b9adbb-0ded-48d7-b579-10d7e736f329',
        headings: {
          en: 'notification test',
          ja: '通知テスト'
        },
        contents: {
          en: 'This is notification test',
          ja: '通知テスト'
        },
      }
    }
    axios(params).then(res => {
      console.log(res.data);
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  bottom: 0;
  position: fixed;
  margin-top: auto;
  background-color: rgb(218, 226, 218,0.7);
  width: 100%;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 3px 0 0 #b4afaf, 0 1px 1px 0 #e9e9e9;
  transform: translateY(-3px);
  padding: 0.5em 1em 0.5em;
  color: #0f2018;
  font-weight: bold;
  font-family: fantasy;
}

</style>
