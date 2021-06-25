(()=>{
'use strict';

new Vue({
  el: '#chat',

  data: {
    chat: 0,
    chats: [
      '休憩時間に吸いたくなる人は、ガムを噛んだり、ミンティアを食べましょう！',
      '起きてすぐ吸いたくなる時は、冷水で顔を洗ってみましょう！',
      '食事の後吸いたくなる時は、歯磨きをしてスッキリしましょう！',
      'コーヒーと一緒に吸う人は、紅茶に変えてみましょう！',
      'お酒と一緒に吸う人は、冷水を飲んでみましょう！',
    ],
    timer: null,
  },

  computed: {
    btnText: function () {
      return this.timer === null ? '▲' : '▼';
    }
  },

  mounted: function () {
    this.playChat();
  },

  methods: {
    randomChat: function () {
      this.chat = Math.floor(Math.random() * this.chats.length);
    },

    playChat: function () {

      this.timer = setInterval(() => {
        this.randomChat();
      }, 6000);
    },

    stopChat: function () {
      const showContentStyle = document.getElementById('showContent').style;
      if (this.timer === null) {
        this.playChat();
        showContentStyle.display = '';
      } else {
        clearInterval(this.timer);
        this.timer = null;
        showContentStyle.display = 'none';
      }
    },
  },

})
})();