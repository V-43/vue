let app19_2 = new Vue({
	el: '#s19t2',
	data: {
        year: 2020,
        month: 7,
        months: [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь',
        ],
        selectedDate: '2020-7-16',
        notes: {
            '2020-7-16': [
                {text: "asd", complete: false, editing: false}
            ]
        },
        newNote: '',
    },
    computed: {
        weeks: function() {
            let date = new Date(this.year, this.month, 1),
                day = date.getDay() || 7; //sunday is not 0 day but 7 day
            day--; //[0..6]
            if (!day) {
                date.setDate(day-6);    
            } else {
                date.setDate(-day+1);
            }
            let res = new Array();
            for (var w = 0; w < 6; w++) {
                res[w] = new Array();
                for (var d = 0; d < 7; d++) {
                    res[w][d] = {
                        value: date.getDate(),
                        month: date.getMonth(),
                    };
                    date.setDate(res[w][d].value + 1);
                }
            }
            return res;
        },
    },
    methods: {
        prevMonth: function() {
            if (!this.month) {
                this.month = 11;
                this.year--;
            } else {
                this.month = !this.month ? 11 : this.month-1;
            }
        },
        nextMonth: function() {
            if (this.month === 11) {
                this.month = 0;
                this.year++;
            } else {
                this.month++;
            }
        },
        selectDate: function(date, month) {
            this.selectedDate = `${this.year}-${month}-${date}`;
            if (month < this.month) {
                this.month--;
            } else if (month > this.month) {
                this.month++;
            }
        },
        addNote: function() {
            if (!this.notes[this.selectedDate]) {
                // this.$set(this.notes, this.selectedDate, []);
                this.notes[this.selectedDate] = [];
            }
            this.notes[this.selectedDate].push({text: this.newNote, complete: false, editing: false});
        },
        printSelectedDate: function() {
            let selDate = this.selectedDate.split('-');
            return `${selDate[2]}, ${this.months[selDate[1]]}, ${selDate[0]}`;
        },
        isSelect: function(date) {
            let selDate = this.selectedDate.split('-');
            return this.year == selDate[0] && this.month == selDate[1] && date == selDate[2];
        }
    },
    filters: {
        formatDate: function(date) {
            return ('0' + date).slice(-2);
        }
    }
});