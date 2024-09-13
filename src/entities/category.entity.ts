import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'category_id', type: 'bigint' })
  categoryId: number;

  @Column({ name: 'category_name', type: 'varchar', length: 100 })
  categoryName: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
