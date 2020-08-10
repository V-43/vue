let app5_1 = new Vue({
	el: '#s5t1',
	data: {
		text: '12345',
	},
	methods: {
		changeMsg: function() {
			this.text = 'abcde';
		}
	}
});