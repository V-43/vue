let app6_2 = new Vue({
	el: '#s6t2',
	data: {
		text: "abcde",
	},
	methods: {
		sayHello: function(name) {
            alert(`Привет, ${name}!`);
        },
	}
});