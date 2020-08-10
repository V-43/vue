let app5_3 = new Vue({
	el: '#s5t3',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
		shiftItem: function() {
			this.items.shift();
		}
	}
});