let app15_7 = new Vue({
	el: '#s15t7',
    filters: {
        sqrt: function(num) {
            return Math.sqrt(num);
        },
        fixed: function(num, digits) {
            return num.toFixed(digits);
        }
    }
});