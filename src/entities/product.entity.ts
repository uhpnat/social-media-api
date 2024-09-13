import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'product_id', type: 'bigint' })
  productId: number;

  @Column({ name: 'product_name', type: 'varchar', length: 150 })
  productName: string;

  @Column({ name: 'category_id', type: 'bigint' })
  categoryId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
