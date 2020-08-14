let app15_4 = new Vue({
	el: '#s15t4',
    filters: {
        formatDate: function(date) {
            date = new Date(date);
            return `${date.getDate()}.${("0" + (date.getMonth()+1)).slice(-2)}.${date.getFullYear()}`
        }
    }
});