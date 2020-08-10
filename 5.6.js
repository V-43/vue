let app5_6 = new Vue({
	el: '#s5t6',
	data: {
		items: ['d', 'c', 'e', 'b', 'a'],
	},
	methods: {
		sort: function() {
			this.items.sort();
        },
	}
});