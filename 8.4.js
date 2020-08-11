let app8_4 = new Vue({
	el: '#s8t4',
	data: {
        text1: '',
        text2: '',
    },
    methods: {
        swap: function() {
            let temp = this.text1;
            this.text1 = this.text2;
            this.text2 = temp;
        },
    }
});