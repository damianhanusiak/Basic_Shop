const addProductForm = document.querySelector(".form-add-product");
const nameInput = document.querySelector("[name='product-name']");
const priceInput = document.querySelector("[name='product-price']");
const submitBtn = document.querySelector("button.submit");
const productsUl = document.querySelector(".products-list");

const saveProductToLocalStorage = (name, price) => {
	const productsList = JSON.parse(localStorage.getItem("shop-products")) ?? [];
	productsList.push({ name, price });
	localStorage.setItem("shop-products", JSON.stringify(productsList));
};

const addProductToShop = (name, price) => {
	const newLi = document.createElement("li");
	const newStrong = document.createElement("strong");
	newStrong.innerText = name;
	const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`);
	const newBtn = document.createElement("button");
	newBtn.classList.add("btn-buy-product");
	newBtn.dataset.name = name;
	newBtn.dataset.price = String(price);
	newBtn.textContent = "kup";
	newBtn.addEventListener("click", addProductToBasket);
	newLi.appendChild(newStrong);
	newLi.appendChild(newPriceText);
	newLi.appendChild(newBtn);
	productsUl.appendChild(newLi);
};

const loadProductsFromLocalStorage = () => {
	const productsList = JSON.parse(localStorage.getItem("shop-products")) ?? [];

	for (const { name, price } of productsList) {
		addProductToShop(name, price);
	}
};

const handleAddProductFormSubmit = event => {
	event.preventDefault();
	const nameFromInput = nameInput.value;
	const priceFromInput = Number(priceInput.value);

	addProductToShop(nameFromInput, priceFromInput);
	saveProductToLocalStorage(nameFromInput, priceFromInput);
};

addProductForm.addEventListener("submit", handleAddProductFormSubmit);

loadProductsFromLocalStorage();
