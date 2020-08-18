let app19_4 = new Vue({
	el: '#s19t4',
	data: {
        quests: [
            {
                question: 'Вопрос 1',
                answer: 'Ответ 1'
            },
            {
                question: 'Вопрос 2',
                answer: 'Ответ 2'
            },
            {
                question: 'Вопрос 3',
                answer: 'Ответ 3'
            },
        ],
        userAnswers: new Array(3),
        borders: new Array(3),
    },
    methods: {
        checkAnswer: function(answer, idx) {
            this.$set(this.userAnswers, idx, answer);
            this.borders[idx] = (this.quests[idx].answer === answer) ? 'green' : 'red';
        }
    }
});