let app15_8 = new Vue({
	el: '#s15t8',
    filters: {
        formatDate: function(date) {
            date = new Date(date);
            return `${date.getDate()}.${("0" + (date.getMonth()+1)).slice(-2)}.${date.getFullYear()}`
        }
    }
});