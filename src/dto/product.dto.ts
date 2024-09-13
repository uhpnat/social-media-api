import { IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

export class ProductDto {
  @IsOptional()
  productId?: number;

  @IsNotEmpty({ message: 'Tên sản phẩm không được để trống' })
  @MinLength(5, { message: 'Tên sản phẩm phải có ít nhất 5 ký tự' })
  productName: string;

  @IsNotEmpty({ message: 'ID danh mục không được để trống' })
  @IsNumber({}, { message: 'ID danh mục phải là số' })
  categoryId: number;

  @IsNotEmpty({ message: 'Giá sản phẩm không được để trống' })
  @IsNumber({}, { message: 'Giá phải là số hợp lệ' })
  price: number;

  @IsNotEmpty({ message: 'Số lượng sản phẩm không được để trống' })
  @IsNumber({}, { message: 'Số lượng phải là số hợp lệ' })
  quantity: number;

  @IsOptional()
  description?: string;
}
