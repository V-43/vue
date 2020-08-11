let app6_5 = new Vue({
	el: '#s6t5',
	data: {
		items: "1230456".split(''),
	},
	methods: {
		addExclamationMark: function(idx) {
            let arr = this.items.concat();
            arr[idx] = arr[idx] + "!";
            this.items = arr;
        },
	}
});