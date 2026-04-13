const products = [
    {
        name: "254 Noir Hoodie",
        price: 3500,
        image: "images/hoodie.jpg",
        category: "Street Luxe"
    },
    {
        name: "Mtaa Drift Tee",
        price: 1800,
        image: "images/tshirt.jpg",
        category: "Urban Drop"
    },
    {
        name: "Nairobi Shadow Jacket",
        price: 5000,
        image: "images/jacket.jpg",
        category: "Premium Street"
    },
    {
        name: "254 Essentials Cap",
        price: 1200,
        image: "images/cap.jpg",
        category: "Accessories"
    }
];

const container = document.getElementById("product-container");

function displayProducts() {

    container.innerHTML = ""; // reset

    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>KES ${product.price}</p>
        `;

        container.appendChild(card);
    });
}

displayProducts();