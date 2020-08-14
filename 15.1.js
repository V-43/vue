let app15_1 = new Vue({
	el: '#s15t1',
	data: {
        str: "string",
    },
    filters: {
        uppercase: function(str) {
            return str.toUpperCase();
        }
    }
});