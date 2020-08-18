function zeros(num, digits=2) {
    let a = new Array(digits);
    return (a.join('0') + num).slice(-digits);
}
let app19_3 = new Vue({
	el: '#s19t3',
	data: {
        notes: {
            '18.08.2020 17:12:21': 'asd'
        },
        selected: '18.08.2020 17:12:21',
    },
    methods: {
        addNote: function() {
            let date = new Date();
            date = `${zeros(date.getDate())}.${zeros(date.getMonth()+1)}.${date.getFullYear()} ${zeros(date.getHours())}:${zeros(date.getMinutes())}:${zeros(date.getSeconds())}`;
            this.$set(this.notes, date, '');
            this.selected = date;
        }
    }
});