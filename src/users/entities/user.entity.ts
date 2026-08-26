import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255, select: false })
  contraseña!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
 phone?: string;

   @Column({ type: 'varchar', length: 20, nullable: true })
 test?: string;

 @Column({ type: 'varchar', length: 20, nullable: true })
 test2?: string;


  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;


  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}