class Basket {
	constructor() {
		this.items = [];
		this.totalValue = 0;
	}

	add(item) {
		this.items.push(item);
		this.addToTotalValue(item.price);
	}

	addToTotalValue(newPrice) {
		this.totalValue += newPrice;
	}

	getTotalValue() {
		return this.items.reduce((prev, product) => prev + product.price, 0);
	}

	showBasket() {
		this.items
			.map(
				(product, i) =>
					`${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł.`
			)
			.forEach(line => console.log(line));
	}

	remove(no) {
		this.items.splice(no - 1, 1);
	}
}

class Product {
	constructor(productName, productPrice) {
		this.name = productName;
		this.price = productPrice;
	}

	setNewPrice(newPrice) {
		this.price = newPrice;
	}
}

const shopBasket = new Basket();
const oranges = new Product("Pomarańcze LUZ", 7.55);
const cucumbers = new Product("Ogórek duży", 8.2);

shopBasket.add(oranges);
shopBasket.add(cucumbers);
shopBasket.add(cucumbers);
console.log(shopBasket.getTotalValue());
shopBasket.showBasket();
shopBasket.remove(2);
shopBasket.showBasket();
console.log(shopBasket.getTotalValue());
