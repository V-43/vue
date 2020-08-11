let app8_5 = new Vue({
	el: '#s8t5',
	data: {
        fio: '',
        surname: '',
        name: '',
        middleName: '',
    },
    methods: {
        splitFIO: function() {
            let fio = this.fio.split(' ');
            this.surname = fio[0];
            this.name = fio[1];
            this.middleName = fio[2];
        },
    }
});