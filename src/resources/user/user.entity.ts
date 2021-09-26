import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { validateOrReject, IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';

import { TUserCredentials } from './user.types';

@Entity()
export class User extends BaseEntity {
  constructor(userData: TUserCredentials) {
    super();
    if (userData) {
      this.email = userData.email;
      this.password = userData.password;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: true,
  })
  username: string;

  @IsEmail()
  @Column({
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    length: 100,
    nullable: true,
  })
  firstName: string;

  @Column({
    length: 100,
    nullable: true,
  })
  lastName: string;

  @Exclude()
  @Column({
    select: false,
    default: '',
  })
  password: string;

  @Exclude()
  @CreateDateColumn({
    select: false,
  })
  createdAt: Date;

  @Exclude()
  @DeleteDateColumn({
    select: false,
  })
  deletedAt: Date;

  @Exclude()
  @UpdateDateColumn({
    select: false,
  })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  validateData() {
    return validateOrReject(this, {
      validationError: {
        target: false,
      },
      stopAtFirstError: true,
    });
  }
}
