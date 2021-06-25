(()=>{
'use strict';

new Vue({
  el: '#app',

  data: {
      number: '??',
      running: false,
      intervalID: '',
  },

  methods: {
    random: function () {
      const value = document.getElementById('number').value;
      const valid = document.getElementById('number').validity.valid;
      const input = document.getElementById('number');
      const btn = document.getElementById('btn');

      if (this.running === false && valid === true && value !== '') {
        this.running = true;
        input.disabled = true;
        btn.textContent = 'ストップ';
        btn.classList.add('stop');
        this.intervalID = setInterval(() => {
          this.number = Math.floor(Math.random() * value);
        }, 10);
      } else if (valid === false || value === '') {
        alert('有効な数値を入力してください！');
      } else if (this.running === true) {
        this.running = false;
        input.disabled = false;
        btn.textContent = 'スタート';
        btn.classList.remove('stop');
        clearInterval(this.intervalID);
      }
    },
  },
})
})();