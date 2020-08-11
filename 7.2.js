let app7_2 = new Vue({
	el: '#s7t2',
	data: {
        showName: true,
        name: 'Вася'
    },
    methods: {
        hideParagraph: function() {
            this.showName = false;
        }
    }
});