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
// Task 5: Product Availability
let inventory = [0, 8, 12, 4, 0];
let availableProducts = inventory.filter(qty => qty > 0); // Remove zero stock
console.log("Available Products:", availableProducts);
// Task 6: Revenue Calculation
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); // Sum all sales
console.log(`Total Revenue: $${totalRevenue}`);
// Task 7: Customer Search
let customers = ["Alice", "Bob", "Charlie", "David"];
let foundCustomer = customers.find(customer => customer === "Charlie"); // Find "Charlie"
console.log("Found Customer:", foundCustomer);
// Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Tax: $${tax}`);
    return tax;
}
calculateTax(250, 0.08);
// Task 9: Discount Application
const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
};
applyDiscount(350, 0.20);


