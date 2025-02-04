// Task 1: Customer Profile
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);
// Task 2: Order Details
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();
