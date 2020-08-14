let app15_3 = new Vue({
	el: '#s15t3',
	data: {
        str: "STRING aaaaa bbb ccccccccccc dd",
    },
    filters: {
        capitalizeWords: function(str) {
            let words = str.split(" ");
            words = words.map((word) => word[0].toUpperCase() + word.slice(1));
            return words.join(" ");
        }
    }
});