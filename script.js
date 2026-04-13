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

async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        displayProducts(data);

    } catch (error) {
        console.log("Error fetching products:", error);
    }
}