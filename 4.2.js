let app4_2 = new Vue({
	el: '#s4t2',
	data: {
		num1: 1,
        num2: 2,
	},
	methods: {
		sum: function() {
			return this.num1 + this.num2;
		}
	}
});