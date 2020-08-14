let app16_1 = new Vue({
	el: '#s16t1',
	data: {
        name: '',
        surname: '',
        patronymic: ''
    },
    computed: {
        fullName: function() {
            return `${this.surname} ${this.name} ${this.patronymic}`;
        }
    }
});