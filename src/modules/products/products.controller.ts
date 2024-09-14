import { HttpMessage, HttpStatus } from 'src/global/emunClass';
import { ResponseData } from 'src/global/globalClass';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsServices: ProductsService) {}
  private toDto(product: ProductEntity): ProductDto {
    return {
      productId: product.productId,
      productName: product.productName,
      categoryId: product.categoryId,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
    };
  }
  @Get()
  async getProducts(): Promise<ResponseData<ProductDto[]>> {
    try {
      const products = await this.productsServices.getProducts();
      const productDtos = products.map((product) => this.toDto(product));
      return new ResponseData<ProductDto[]>(
        productDtos,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductDto[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): Promise<ResponseData<ProductDto>> {
    try {
      const product = await this.productsServices.createProduct(productDto);
      return new ResponseData<ProductDto>(
        this.toDto(product),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      console.error('Error creating product:', error);
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  async detailProduct(
    @Param('id') id: number,
  ): Promise<ResponseData<ProductDto>> {
    try {
      const product = await this.productsServices.detailProduct(id);
      return new ResponseData<ProductDto>(
        this.toDto(product),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      console.error('Error fetching product details:', error);
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.NOT_FOUND,
        HttpMessage.NOT_FOUND,
      );
    }
  }

  @Put('/:id')
  async updateProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
    @Param('id') id: number,
  ): Promise<ResponseData<ProductDto>> {
    try {
      const product = await this.productsServices.updateProduct(id, productDto);
      return new ResponseData<ProductDto>(
        this.toDto(product),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      console.error('Error updating product:', error);
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number): Promise<ResponseData<boolean>> {
    try {
      const success = await this.productsServices.deleteProduct(id);
      return new ResponseData<boolean>(
        success,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<boolean>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
