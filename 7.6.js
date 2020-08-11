let app7_6 = new Vue({
	el: '#s7t6',
	data: {
        showName: true,
        name: 'Вася'
    },
    methods: {
        toggleParagraph: function() {
            this.showName = !this.showName;
        },
    }
});