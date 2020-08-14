let app15_5 = new Vue({
	el: '#s15t5',
    filters: {
        getDay: function(num) {
            return [
                "Понедельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Суббота",
                "Воскресенье",
            ][num - 1];
        }
    }
});