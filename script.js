let cart = [];
const products = [
    {
        name: "254 Noir Hoodie",
        price: 3500,
        image: "image6.jpg",
        category: "Street Luxe",
        id: 1
    },
    {
        name: "Mtaa Drift Tee",
        price: 1800,
        image: "image7.jpg",
        category: "Urban Drop",
        id: 2
    },
    {
        name: "Nairobi Shadow Jacket",
        price: 5000,
        image: "image8.jpg",
        category: "Premium Street",
        id: 3
    },
    {
        name: "254 Essentials Cap",
        price: 1200,
        image: "image9.jpg",
        category: "Accessories",
        id: 4
    }
];

const container = document.getElementById("product-container");

function displayProducts() {

    container.innerHTML = ""; 

    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.category}</p>
    <p>KES ${product.price}</p>

    <button onclick="addToCart('${product.name}', ${product.price})">
        Add to Cart
    </button>

    <button onclick="updateProduct(${product.id})">Update</button>
    <button onclick="deleteProduct(${product.id})">Delete</button>
`;
        container.appendChild(card);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });

    alert(`${name} added to cart 🛒`);

    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.name} - KES ${item.price}</p>
        `;

        cartContainer.appendChild(div);

        total += item.price;
    });

    totalDisplay.textContent = "Total: KES " + total;
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    renderFiltered(filtered);
});

function renderFiltered(filteredProducts) {
    container.innerHTML = "";

    filteredProducts.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>KES ${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
            <button onclick="updateProduct(${product.id})">Update</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function renderFiltered(filteredProducts) {
    container.innerHTML = "";

    filteredProducts.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>KES ${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
            <button onclick="updateProduct(${product.id})">Update</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function addProduct() {
    fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "254 Street Hoodie",
            price: 3000
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("POST:", data);
        alert("Product added (API)");
    });
}

function updateProduct(id) {
    fetch(`https://dummyjson.com/products/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            price: 999
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("PATCH:", data);
        alert("Product updated");

        const item = products.find(p => p.id === id);
        if (item) {
            item.price = 999;
            displayProducts();
        }
    });
}

function deleteProduct(id) {
    fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("DELETE:", data);
        alert("Product deleted");

        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            displayProducts();
        }
    });
}
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty 🛒");
        return;
    }

    alert("Order placed successfully 🇰🇪🔥");

    cart = [];
    renderCart();
}

displayProducts();