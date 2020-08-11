let app6_3 = new Vue({
	el: '#s6t3',
	data: {
		items: "abcdefgh".split(''),
	},
	methods: {
		removeItem: function(idx) {
            this.items.splice(idx, 1);
        },
	}
});