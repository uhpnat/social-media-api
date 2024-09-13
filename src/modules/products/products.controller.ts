import { HttpMessage, HttpStatus } from './../../global/emunClass';
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
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsServices: ProductsService) {}
  @Get()
  async getProducts(): Promise<ResponseData<ProductEntity[]>> {
    try {
      const products = await this.productsServices.getProducts();
      return new ResponseData<ProductEntity[]>(
        products,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductEntity[]>(
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
        product,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductDto>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  detailProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productsServices.detailProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put('/:id')
  updateProduct(
    @Body() productDto: ProductDto,
    @Param('id') id: number,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productsServices.updateProduct(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete('/:id')
  deleteProduct(@Param('id') id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.productsServices.deleteProduct(id),
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
