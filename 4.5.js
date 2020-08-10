let app4_5 = new Vue({
	el: '#s4t5',
	data: {
		num1: 1,
        num2: 2,
        num3: 3,
	},
	methods: {
		sum: function() {
			alert(this.num1 + this.num2 + this.num3);
		}
	}
});