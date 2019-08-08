<template>
  <div class="profile">
      <div class="profile-box">
          <div class="profile-title">
              <i class="fas fa-user-circle"> Profile</i>
          </div>
          <table class="profile-table">
            <tbody>
              <tr><td>氏名</td><td>{{name}}</td></tr>
              <tr><td>年齢</td><td>{{age}}</td></tr>
              <tr><td>住所</td><td>{{address}}</td></tr>
              <tr><td>趣味</td><td>{{hobby}}</td></tr>
              <tr><td>自己紹介</td><td>{{introduction}}<br>{{introduction2}}</td></tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      name: "J.Yoshimura",
      age: "29歳",
      address: "京都府",
      hobby: "バイク、旅行",
      introduction: "4年制大学の法学部を卒業後、医療系の会社で５年間社内SEをしていました。",
      introduction2: "IBMメインフレームでの基幹システム開発・保守、ActiveDirectoryなどのサーバー保守及び社内ネットワーク管理と一通りの経験があります。"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  width: 100%;
}

.profile-box {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  text-align: center;
  height: 100%;
}

.profile-title {
  font-size: 60px;
  margin-bottom: 30px;
}
.profile-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  padding-bottom: 50px;
  border-collapse: collapse;
}

.profile-table td {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  min-width: 120px;
}

.profile-table tbody tr:nth-of-type(2n) {
  background-color: lightblue;
}

@media (max-width: 640px) {
  .profile-box {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .profile-title {
    font-size: 48px;
    margin-bottom: 10px;
  }
  .profile-table {
    font-size:18px;
    padding-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .profile-box {
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .profile-title {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .profile-table {
    font-size:16px;
    padding-bottom: 20px;
  }
  .profile-table td {
    min-width: 100px;
  }
}

</style>
