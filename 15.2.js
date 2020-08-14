let app15_2 = new Vue({
	el: '#s15t2',
	data: {
        str: "STRING",
    },
    filters: {
        lowercase: function(str) {
            return str.toLowerCase();
        }
    }
});