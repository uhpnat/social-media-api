export class Product {
  productId?: number;
  categoryId?: number;
  productName?: string;
  price?: number;
  quantity?: number;
  description?: string;
  constructor({
    productId,
    categoryId,
    productName,
    price,
    quantity,
    description,
  }: {
    productId?: number;
    categoryId?: number;
    productName?: string;
    price?: number;
    quantity?: number;
    description?: string;
  }) {
    this.productId = productId;
    this.categoryId = categoryId;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}
