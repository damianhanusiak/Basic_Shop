const buyBtns = [...document.querySelectorAll(".btn-buy-product")];
const basketUl = document.querySelector(".basket-list");

const basket = new Basket();

const addProductToBasket = event => {
	const name = event.target.dataset.name;
	const price = Number(event.target.dataset.price);
	const newProduct = new Product(name, price);
	basket.add(newProduct);
	createBasketUi();
};

const createBasketUi = () => {
	basketUl.innerText = "";
	for (const oneProductInfo of basket.getBasketSummary()) {
		const newLi = document.createElement("li");
		newLi.textContent = oneProductInfo;
		basketUl.append(newLi);
	}
};

for (const btn of buyBtns) {
	btn.addEventListener("click", addProductToBasket);
}
