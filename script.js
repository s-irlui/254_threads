const products = [
    {
        name: "Black Hoodie",
        price: 2500,
        image: "images/hoodie.jpg"
    },
    {
        name: "White Tee",
        price: 1500,
        image: "images/tshirt.jpg"
    },
    {
        name: "Street Jacket",
        price: 4000,
        image: "images/jacket.jpg"
    }
];

const container = document.getElementById("product-container");

function displayProducts() {
    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>KES ${product.price}</p>
        `;

        container.appendChild(card);
    });
}