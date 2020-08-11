let app8_2 = new Vue({
	el: '#s8t2',
	data: {
        num: null,
        result: null,
    },
    methods: {
        sqrt: function() {
            this.result = Math.sqrt(this.num);
        },
    }
});