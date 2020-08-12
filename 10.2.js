let app10_2 = new Vue({
	el: '#s10t2',
	data: {
        text: '',
        words: [],
    },
    methods: {
        getWordsArray: function() {
            this.words = this.text.split(' ');
        }
    }
});