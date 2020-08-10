let app4_3 = new Vue({
	el: '#s4t3',
	data: {
		text: 'hello',
	},
	methods: {
		show: function() {
			alert(this.text);
		}
	}
});