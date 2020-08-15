let app17_4 = new Vue({
    el: '#s17t4',
    data: {
        rawHtml: '',
    },
    methods: {
        getHtml: function() {
            this.rawHtml = "<u>underline text</u>";
        },
    }
});