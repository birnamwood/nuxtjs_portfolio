<template>
  <div class="history">
      <div class="history-box">
          <div class="history-title">
            <i class="fas fa-history"> History</i>
          </div>
          <table class="history-table">
            <thead>
              <tr><th>年度</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td>2014年3月</td><td>京都産業大学　法学部卒業</td></tr>
              <tr><td>2014年4月</td><td>医療系企業に入社　社内SEとして基幹システムの開発、保守・運用に携わる</td></tr>
              <tr><td>2019年4月</td><td>退職</td></tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      // name: "氏名：　ｊ．ｙ",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history {
  width: 100%;
}

.history-box {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  text-align: center;
  height: 100%;
  /* background-color: lightblue; */
}

.history-title {
  font-size: 60px;
  margin-bottom: 30px;
  /* background-color: lightblue; */
}
.history-table {
  width: 90%;
  border-collapse: collapse;
  font-size:20px;
  text-align: left;
  margin: auto;
}

.history-table th,.history-table td {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  min-width: 150px;
}

.history-table tbody tr:nth-of-type(2n+1) {
  background-color: lightblue;
}

@media (max-width: 640px) {
  .history-box {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .history-title {
    font-size: 48px;
    margin-bottom: 10px;
  }
  .history-table {
    font-size:18px;
    padding-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .history-box {
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .history-title {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .history-table {
  font-size:16px;
  padding-bottom: 20px;
  }
}

</style>
