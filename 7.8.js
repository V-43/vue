let app7_8 = new Vue({
	el: '#s7t8',
	data: {
        showFirst: true,
    },
    methods: {
        changeParagraph: function() {
            this.showFirst = !this.showFirst;
        },
    }
});