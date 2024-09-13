import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('accounts')
export class AccountsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'account_id', type: 'bigint' })
  accountId: number;

  @Column({ type: 'varchar', length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  fullname: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'longtext', default: '{"preferences": {"theme": "light"}}' })
  details: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 20, default: 'block' })
  status: string;

  @Column({
    name: 'last_login',
    type: 'timestamp',
    default: '0000-00-00 00:00:00',
  })
  lastLogin: Date;

  @Column({ type: 'varchar', length: 50, default: 'user' })
  role: string;
}
