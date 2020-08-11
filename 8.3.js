let app8_3 = new Vue({
	el: '#s8t3',
	data: {
        num1: null,
        num2: null,
        result: null,
    },
    methods: {
        multiply: function() {
            this.result = this.num1 * this.num2;
        },
    }
});