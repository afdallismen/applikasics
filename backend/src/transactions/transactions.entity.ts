import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  timestamp: Date;
}
