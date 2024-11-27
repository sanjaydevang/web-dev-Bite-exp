// Change greeting based on time of day
document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("dynamic-greeting");
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! Welcome to Bite Express";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! Welcome to Bite Express";
    } else {
        greeting = "Good Evening! Welcome to Bite Express";
    }

    greetingElement.textContent = greeting;
});

// Order tracking functionality
document.getElementById("track-order-btn").addEventListener("click", function () {
    const orderId = document.getElementById("order-id").value;
    const statusDiv = document.getElementById("order-status");

    if (orderId) {
        statusDiv.innerHTML = `<p>Your order #${orderId} is <strong>Out for Delivery</strong>.</p>`;
    } else {
        statusDiv.innerHTML = `<p>Please enter a valid Order ID.</p>`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    const cartCounter = document.getElementById("cart-counter");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-item");
            const itemPrice = parseFloat(this.getAttribute("data-price"));

            // Get cart from localStorage or create an empty one
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add item to the cart
            cart.push({ name: itemName, price: itemPrice });
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart counter
            cartCounter.textContent = cart.length;

            alert(`${itemName} added to the cart!`);
        });
    });
});

