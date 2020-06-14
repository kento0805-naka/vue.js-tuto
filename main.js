var items = [{
    name: 'pencile',
    price: 300,
    quantitiy: 0
},
{
    name: 'note',
    price: 400,
    quantitiy: 0
},
{
    name: 'eraser',
    price: 500,
    quantitiy: 0
},
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function(value) {
            if (!value) {
                return 0;
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
    },
    computed: {
        totalPrice: function() {
            return this.items.reduce(function(sum, item) {
                return sum + (item.price * item.quantitiy);
            }, 0)
        },

        totalPriceWithTax: function() {
            return Math.floor(this.totalPrice * 1.10);
        },

        canBuy: function() {
            return this.totalPrice >= 1000
        },

        errorMessageStyle: function() {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    },
    methods: {
        doBuy: function() {
            alert(this.totalPriceWithTax + '円のお買い上げ！');
            this.items.forEach(function(item) {
                item.quantitiy = 0;
            })
        }
    }
})


items[0].quantitiy = 3;