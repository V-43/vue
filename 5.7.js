let app5_7 = new Vue({
	el: '#s5t7',
	data: {
		items: [-1, 0, 2, -5, 10, 3],
	},
	methods: {
		filter: function() {
			this.items = this.items.filter((elem) => elem > 0 && elem < 10);
        },
	}
});