let app5_2 = new Vue({
	el: '#s5t2',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
		addItem: function() {
			this.items.push('!!!');
		}
	}
});