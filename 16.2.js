let app16_2 = new Vue({
	el: '#s16t2',
	data: {
        num: null
    },
    computed: {
        sqrNum: function() {
            return this.num * this.num;
        }
    }
});