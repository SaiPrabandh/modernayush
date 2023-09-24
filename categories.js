// Sample product data with categories
const products = [
    { name: "Product 1", description: "Description of Product 1.", price: 19.99, category: "Herbs" },
    { name: "Product 2", description: "Description of Product 2.", price: 24.99, category: "Oils" },
    { name: "Product 3", description: "Description of Product 3.", price: 29.99, category: "Supplements" },
    { name: "Product 4", description: "Description of Product 4.", price: 15.99, category: "Herbs" },
    { name: "Product 5", description: "Description of Product 5.", price: 18.99, category: "Oils" },
    { name: "Product 6", description: "Description of Product 6.", price: 22.99, category: "Supplements" },
    // Add more product data with categories here
];

// Array to store items in the cart
const cart = [];

// Function to group products by category
function groupProductsByCategory() {
    const groupedProducts = {};

    products.forEach(product => {
        const { category } = product;

        if (!groupedProducts[category]) {
            groupedProducts[category] = [];
        }

        groupedProducts[category].push(product);
    });

    return groupedProducts;
}

// Function to display products under each category
function displayProductsByCategory(category = "all") {
    const productContainer = document.querySelector(".product-list");

    // Clear existing products
    productContainer.innerHTML = "";

    const groupedProducts = groupProductsByCategory();

    for (const category in groupedProducts) {
        if (groupedProducts.hasOwnProperty(category)) {
            const categoryProducts = groupedProducts[category].slice(0, 3); // Display up to 3 products per category

            const categorySection = document.createElement("section");
            categorySection.classList.add("category-section");

            const categoryHeader = document.createElement("h2");
            categoryHeader.textContent = category;
            categorySection.appendChild(categoryHeader);

            const categoryProductList = document.createElement("ul");

            categoryProducts.forEach(product => {
                const productItem = document.createElement("li");

                // Create a product container with the "product-container" class
                const productContainer = document.createElement("div");
                productContainer.classList.add("product-container");

                productContainer.innerHTML = `
                    <img src="product-image.jpg" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-product="${product.name}">Add to Cart</button>
                `;
                productItem.appendChild(productContainer);

                categoryProductList.appendChild(productItem);
            });

            categorySection.appendChild(categoryProductList);
            productContainer.appendChild(categorySection);
        }
    }

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");
            addToCart(productName);
        });
    });
}

// Function to add a product to the cart
function addToCart(productName) {
    const product = products.find(product => product.name === productName);
    if (product) {
        cart.push(product);
        alert(`Added ${product.name} to the cart.`);
    } else {
        alert("Product not found.");
    }
}

// Event listener for the search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
    const searchInput = document.getElementById("category-search");
    const searchCategory = searchInput.value.trim(); // Remove leading and trailing spaces

    // Find the matching category or set to "all" if not found
    const matchingCategory = searchCategory ? searchCategory : "all";

    displayProductsByCategory(matchingCategory);
});

// Call the function to display products by category when the page loads
window.addEventListener("load", () => {
    displayProductsByCategory();
});
