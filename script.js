// Sample product data
const products = [
    { id: 1, name: "Product A", price: 20.99, description: "Helps relieve headaches." },
    { id: 2, name: "Product B", price: 15.99, description: "Effective for cough relief." },
    { id: 3, name: "Product C", price: 25.99, description: "Reduces stress and promotes relaxation." },
    { id: 4, name: "Product D", price: 19.99, description: "For digestive health." },
    { id: 5, name: "Product E", price: 24.99, description: "Boosts immune system." },
    { id: 6, name: "Product F", price: 29.99, description: "Skin care solution." },
    // Add more product data
];

// Sample data for symptoms and product suggestions
const symptomData = {
    "headache": [
        { id: 7, name: "Product G", price: 22.99, description: "Headache relief option." },
        { id: 8, name: "Product H", price: 18.99, description: "Another product for headaches." },
    ],
    "cough": [
        { id: 9, name: "Product I", price: 17.99, description: "Cough relief option." },
        { id: 10, name: "Product J", price: 14.99, description: "Cough syrup for quick relief." },
    ],
};

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.mySlides');
        let dots = document.querySelectorAll('.dot');

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');

        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    // Function to display product suggestions on a new webpage
    function displaySuggestions(symptom, suggestedProducts) {
        const newWindow = window.open("recommendations.html", "_blank");

        // Wait for the new window to load before populating it
        newWindow.onload = function () {
            const productSuggestionsDiv = newWindow.document.getElementById("product-suggestions");
            productSuggestionsDiv.innerHTML = `<h2>Products for ${symptom}:</h2>`;

            suggestedProducts.forEach(product => {
                const productItem = newWindow.document.createElement("div");
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productSuggestionsDiv.appendChild(productItem);
            });
        };
    }

    // Event listener for the symptom search button
    document.getElementById("symptom-search-button").addEventListener("click", function () {
        const symptomInput = document.getElementById("symptom-input");
        const symptom = symptomInput.value.trim().toLowerCase();

        if (symptomData.hasOwnProperty(symptom)) {
            // Open the recommendations page in a new tab
            const newWindow = window.open("recommendations.html", "_blank");
            newWindow.onload = function () {
                // Display the product suggestions on the new webpage
                displaySuggestions(symptom, symptomData[symptom]);
            };
        } else {
            alert("No recommendations found for this symptom.");
        }
        
    });

    // Sample addToCart function (You can implement cart functionality separately)
    window.addToCart = function (productId) {
        alert(`Added product with ID ${productId} to cart.`);
    };
});
