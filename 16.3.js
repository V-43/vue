let app16_3 = new Vue({
	el: '#s16t3',
	data: {
        num: 12345678,
    },
    computed: {
        numFormat: function() {
            return this.num.toLocaleString();
        }
    }
});