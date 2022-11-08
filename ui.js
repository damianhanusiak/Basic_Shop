const buyBtns = [...document.querySelectorAll(".btn-buy-product")];
const basketUl = document.querySelector(".basket-list");
const buyAllBtn = document.querySelector(".btn-buy-all");

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
		newLi.textContent = oneProductInfo.text;
		newLi.addEventListener("click", removeItem);
		newLi.dataset.id = oneProductInfo.id;
		basketUl.append(newLi);
	}

	const basketTotalValue = basket.getTotalValue();
	buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(
		2
	)}`;

	if (basketTotalValue > 0) {
		buyAllBtn.removeAttribute("disabled");
	} else {
		buyAllBtn.setAttribute("disabled", "true");
	}
};

const buyAllProducts = () => {
	alert(
		`Zakupiono produkty o wartośći: ${basket.getTotalValue().toFixed(2)} zł`
	);
	basket.clear();
	createBasketUi();
};

const removeItem = event => {
	const id = Number(event.target.dataset.id);
	basket.remove(id);
	createBasketUi();
};

for (const btn of buyBtns) {
	btn.addEventListener("click", addProductToBasket);
}

buyAllBtn.addEventListener("click", buyAllProducts);

createBasketUi();