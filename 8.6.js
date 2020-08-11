let app8_6 = new Vue({
	el: '#s8t6',
	data: {
        items: 'abcdef'.split(''),
        newItem: '',
    },
    methods: {
        addItem: function() {
            this.items.unshift(this.newItem);
        },
    }
});