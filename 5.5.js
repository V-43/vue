let app5_5 = new Vue({
	el: '#s5t5',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
		reverse: function() {
			this.items.reverse();
        },
	}
});