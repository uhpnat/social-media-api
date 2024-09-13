import { ProductDto } from 'src/dto/product.dto';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity) private repo: Repository<ProductEntity>,
  ) {}
  private products: Product[] = [
    { id: 1, categoriesId: 2, productName: 'tanphu', price: 1000 },
    { id: 2, categoriesId: 2, productName: 'tanphu', price: 1000 },
  ];
  async getProducts() {
    return await this.repo.find();
  }
  async createProduct(productDto: ProductDto): Promise<ProductEntity> {
    const product = new ProductEntity();
    const { productName, categoryId, price, quantity, description } =
      productDto;
    product.productName = productName;
    product.categoryId = categoryId;
    product.price = price;
    product.quantity = quantity;
    product.description = description;
    this.repo.create(product);
    return await this.repo.save(product);
  }

  detailProduct(id: number): Product {
    return this.products.find((item) => item.id == id);
  }
  updateProduct(productDto: Product, id: number): Product {
    const index = this.products.findIndex((item) => item.id == id);
    this.products[index].productName = productDto.productName;
    this.products[index].categoriesId = productDto.categoriesId;
    this.products[index].price = productDto.price;
    return this.products[index];
  }
  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((item) => item.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
