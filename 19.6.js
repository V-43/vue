let app19_6 = new Vue({
	el: '#s19t6',
	data: {
        quests: [
            {
                question: 'Для каких v-атрибутов мы узнали сокращения, изучая данный учебник?',
                answers: [
                    'v-show',
                    'v-bind',
                    'v-model',
                    'v-if',
                    'v-on',
                ],
                rights: '10010',
            },
            {
                question: 'Выберите верные утверждения',
                answers: [
                    'при v-if элемент всегда присутствует в DOM, и только CSS-свойство переключается в зависимости от условия.',
                    'у v-if выше затраты на переключения, а у v-show больше затрат на первичную отрисовку',
                    'у v-show выше затраты на переключения, а у v-if больше затрат на первичную отрисовку',
                    'если предполагается, что переключения будут частыми, следует использовать v-show, если же редкими или маловероятными — v-if',
                    'v-if ленивый: если условие ложно на момент первоначальной отрисовки, он не произведёт никаких действий',
                ],
                rights: '11010',
            },
            {
                question: 'Какими способами можно придать реактивность новому свойству объекта?',
                answers: [
                    'используя метод Vue.set()',
                    'используя метод экземпляра vm.$set() или this.$set()',
                    'используя метод экземпляра vm.set() или this.set()',
                    'реактивность для нового свойства добавляется автоматически',
                    'реактивность можно добавить только на этапе инициализации объекта',
                ],
                rights: '00011',
            },
        ],
        currentQuestion: {},
        userAnswers: [],
        results: [],
        showResult: false,
    },
    methods: {
        checkAndNext: function() {
            let answers = this.userAnswers.reduce((sum, elem) => sum + elem, 0); //28
            let rightAnswers = parseInt(this.currentQuestion.rights,2) & answers; //правильно отмеченные пользователем ответы (10я СС)
            let rightAnswersCnt = rightAnswers.toString(2).split('').reduce((sum, elem) => sum + +elem, 0); //кол-во правильно отмеченных ответов
            let questRightCnt = this.currentQuestion.rights.split('').reduce((sum, elem) => sum + +elem, 0); //кол-во правильных ответов
            let wrongAnswers = ~parseInt(this.currentQuestion.rights, 2) & answers; //неправильные ответы (10я СС)
            let wrongAnswersCnt = wrongAnswers.toString(2).split('').reduce((sum, elem) => sum + +elem, 0); //кол-во неправильно отмеченных
            this.results.push({rightAnswersCnt, questRightCnt, wrongAnswersCnt});
            this.userAnswers = [];
            if (this.quests.length) {
                this.currentQuestion = this.quests.pop();
            } else {
                this.showResult = true;
            }
        }
    }
});
app19_6.currentQuestion = app19_6.quests.pop();