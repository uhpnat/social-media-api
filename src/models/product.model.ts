export class Product {
  id?: number;
  categoriesId?: number;
  productName?: string;
  price?: number;
  constructor({ id, categoriesId, productName, price }) {
    if (id !== null) this.id = id;
    if (categoriesId !== null) this.categoriesId = categoriesId;
    if (productName !== null) this.productName = productName;
    if (price !== null) this.price = price;
  }
}
