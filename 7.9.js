let app7_9 = new Vue({
	el: '#s7t9',
	data: {
        show: true,
    },
    methods: {
        toggleParagraph: function() {
            this.show = !this.show;
        },
    }
});