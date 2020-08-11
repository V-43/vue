let app7_7 = new Vue({
	el: '#s7t7',
	data: {
        showList: false,
        items: "abcdefg".split(''),
    },
    methods: {
        toggleList: function() {
            this.showList = !this.showList;
        },
    }
});