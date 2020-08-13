let app14_4 = new Vue({
	el: '#s14t4',
	data: {
        products: [
            {name: 'product1', price: 100, quantity: 4},
            {name: 'product2', price: 200, quantity: 5},
            {name: 'product3', price: 300, quantity: 6},
        ],
    },
    methods: {
        totalPrice: function() {
            return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    }
});