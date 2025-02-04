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
// Task 3: Shopping Cart
let cartItems = ["Notebook", "Backpack", "Pens"];
cartItems.push("Water Bottle");  // Add item
cartItems.pop();                 // Remove last item
cartItems.unshift("Laptop Case"); // Add at beginning
cartItems.shift();               // Remove first item
console.log("Final Cart:", cartItems);
// Task 4: Price Adjustments
let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9); // 10% discount
console.log("Discounted Prices:", discountedPrices);
