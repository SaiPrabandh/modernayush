// Sample product data
const products = [
    { name: "Product 1", description: "Description of Product 1.", price: 19.99 },
    { name: "Product 2", description: "Description of Product 2.", price: 24.99 },
    { name: "Product 3", description: "Description of Product 3.", price: 19.99 },
    { name: "Product 4", description: "Description of Product 4.", price: 24.99 },
    { name: "Product 5", description: "Description of Product 5.", price: 19.99 },
    { name: "Product 6", description: "Description of Product 6.", price: 24.99 },
    { name: "Product 7", description: "Description of Product 7.", price: 19.99 },
    { name: "Product 8", description: "Description of Product 8.", price: 24.99 },
    { name: "Product 9", description: "Description of Product 9.", price: 19.99 },
    { name: "Product 10", description: "Description of Product 10.", price: 24.99 },
    { name: "Product 11", description: "Description of Product 11.", price: 19.99 },
    { name: "Product 12", description: "Description of Product 12.", price: 24.99 }
    // Add more product data here
];

// Function to display products
function displayProducts() {
    const productContainer = document.querySelector(".product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productHTML = `
            <img src="product-image.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

        productDiv.innerHTML = productHTML;
        productContainer.appendChild(productDiv);
    });
}

// Function to add a product to the cart (you can customize this further)
function addToCart(productName) {
    alert(`Added ${productName} to the cart.`);
}

// Call the function to display products when the page loads
window.addEventListener("load", displayProducts);
