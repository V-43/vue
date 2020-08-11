let app6_1 = new Vue({
	el: '#s6t1',
	data: {
		text: "abcde",
	},
	methods: {
		upperCaseFirst: function() {
			this.text = this.text[0].toUpperCase() + this.text.slice(1);
		},
		upperCaseLast: function() {
			this.text = this.text.slice(0,-1) + this.text[this.text.length - 1].toUpperCase();
		},
		firstLastUpperCase: function() {
			this.upperCaseFirst();
			this.upperCaseLast();
		},
	}
});