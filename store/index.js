
//初期化
export const state = () => ({
  entered: false
})

//値をウォッチャで監視
export const getters = {
  entered: state => state.entered
}

//クリックイベントでステートを切り替える
export const mutations ={
  click (state) {
    state.entered = !state.entered
  }
}