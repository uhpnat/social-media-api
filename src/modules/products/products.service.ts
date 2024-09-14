import { ProductDto } from 'src/dto/product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity) private repo: Repository<ProductEntity>,
  ) {}
  async getProducts(): Promise<ProductEntity[]> {
    return await this.repo.find();
  }
  async createProduct(productDto: ProductDto): Promise<ProductEntity> {
    const product = this.repo.create(productDto);
    return await this.repo.save(product);
  }
  async detailProduct(productId: number): Promise<ProductEntity> {
    const product = await this.repo.findOneBy({ productId });
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
    return product;
  }
  async updateProduct(
    id: number,
    productDto: ProductDto,
  ): Promise<ProductEntity> {
    const product = await this.detailProduct(id);
    const { productId, ...data } = productDto;
    Object.assign(product, data);
    return await this.repo.save(product);
  }
  async deleteProduct(productId: number): Promise<boolean> {
    const result = await this.repo.delete(productId);
    return result.affected > 0;
  }
}
