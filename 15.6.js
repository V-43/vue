let app15_6 = new Vue({
	el: '#s15t6',
    filters: {
        numFormat: function(num) {
            num += "";
            num = num.split('').reverse().join('');
            num = num.replace(/(\d{3})/g, '$1 ');
            return num.split('').reverse().join('');
        }
    }
});