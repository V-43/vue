let app14_4 = new Vue({
	el: '#s14t4',
	data: {
        products: [],
        product: '',
        price: null,
        quantity: null,
    },
    methods: {
        totalPrice: function() {
            return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
        },
        addProduct: function() {
            this.products.push({
                name: this.product,
                price: this.price,
                quantity: this.quantity,
            });
        }
    }
});