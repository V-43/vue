let app7_9 = new Vue({
	el: '#s7t9',
	data: {
        shows: 7,
        /* show: true,
        show2: true,
        show3: true, */
    },
    methods: {
        toggleParagraph: function(num) {
            if (this.shows & num) {
                this.shows &= ~num;
            } else
            {
                this.shows |= num;
            }
        },
    }
});