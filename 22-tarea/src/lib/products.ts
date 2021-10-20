export class Product {
	products: Array<{
		title: string;
		price: number;
		thumbail: string;
		id: number;
	}>;
	private count: number;

	constructor() {
		this.products = [];
		this.count = 1;
	}

	getProducts = () => {
		return this.products;
	};

	getProductById = (id: number) => {
		const productById = this.products.find((element) => element.id == id);
		return productById;
	};

	addProduct = (product) => {
		this.products.push({ ...product, id: this.count++ });
		return product;
	};
	updateProduct = (product: any, id: number) => {
		const updatedProduct = (this.products[id] = product);
		return updatedProduct;
	};

	deleteProduct = (id: number) => {
		const deletedProduct = this.products.splice(id, 1);
		return deletedProduct;
	};
}
