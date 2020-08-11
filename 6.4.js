let app6_4 = new Vue({
	el: '#s6t4',
	data: {
		items: "1230456".split(''),
	},
	methods: {
		squareItem: function(idx) {
            let arr = this.items.concat();
            arr[idx] *= arr[idx];
            this.items = arr;
        },
	}
});