function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let app14_2 = new Vue({
	el: '#s14t2',
	data: {
        num: null,
        hiddenNum: randomInt(1, 100),
        msg: 'Загадано число от 1 до 100',
    },
    methods: {
        guess: function() {
            if (this.num > this.hiddenNum) {
                this.msg = 'Введите число меньше';
            } else if (this.num < this.hiddenNum) {
                this.msg = 'Введите число больше';
            } else {
                this.msg = 'Угадали! Загадано новое число';
                this.hiddenNum = randomInt(1, 100);
            }
        }
    }
});