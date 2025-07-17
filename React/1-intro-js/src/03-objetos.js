
const invoice = {
    id: 10,
    name: 'Compraas de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastname: 'Doe',
        age: 32
    },
    items: [
        {
            producto: 'keyboard',
            price: 399,
            quantity: 2
        },
        {
            producto: 'mouse',
            price: 200,
            quantity: 2
        },
        {
            producto: 'paper',
            price: 100,
            quantity: 10
        }
    ],
    total: function () {

        let total = 0;
        this.items.forEach(item => {
           total = total + (item.price * item.quantity)
    });
    return total;
    },
    greeting: () => {
        return `Hola ${invoice.client.name}`;
    }

};

console.log(invoice);


invoice.client.name = 'Salomon Tomas'
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);

console.log(invoice.total());