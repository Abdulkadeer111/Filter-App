const data = [
{
	id: 1, 
	name: "Medium Dara",
	img: "img/dara.jpg",
	price: 74,
	cat: "Dara",
},
{
	id: 2, 
	name: "Zannah Bukar",
	img: "img/zannah.jpg",
	price: 85,
	cat: "Zanna",
},
{
	id: 3, 
	name: "Bongol",
	img: "img/bongol.jpg",
	price: 74,
	cat: "Bongol",
},
{
	id: 4, 
	name: "Normal Dara",
	img: "img/dara1.jpg",
	price: 74,
	cat: "Dara",
},
{
	id: 5, 
	name: "Kindei",
	img: "img/kindei.jpg",
	price: 74,
	cat: "Kindei",
},
{
	id: 6, 
	name: "Zannah Bukar",
	img: "img/zanna.jpg",
	price: 50,
	cat: "Zanna",
},
];

const productsContainer = document.querySelector("products")
const searchInput = document.querySelector("search")
const categoriesContainer = document.querySelector("categories")
const priceRange = document.querySelector("priceRange")
const priceValue = document.querySelector("priceValue")


const displayProducts = (filteredProducts) =>{
	productsContainer.innerHTML = filteredProducts.map((products) =>
		`
			<div class="product">
				<img src=${product.img}>
				<span class="name">${product.name}</span>
				<span class="priceText">$${product.price}</span>
			</div>	
		`

	).join("");
};

displayProducts(data)