const container = document.getElementById("product-container");

async function getProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        displayProducts(data.products);

    } catch (error) {
        console.log("Error fetching products:", error);
    }
} 

function displayProducts(products) {

    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product");

        
        const productName = product.title;
        const productPrice = product.price;
        const productImage = product.thumbnail;
        const productCategory = product.category;

        card.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productCategory}</p>
            <p>KES ${(productPrice * 130).toFixed(0)}</p>
        `;

        container.appendChild(card);
    });
}
