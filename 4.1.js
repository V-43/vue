let app4_1 = new Vue({
	el: '#s4t1',
	data: {
		message: 'hello',
	},
	methods: {
		show: function() {
			return (this.message); // выведет 'hello'
		}
	}
});