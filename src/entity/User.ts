import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  declare id: number;
  
  @Column()
  declare name: string;

  @Column({
      default: true
  })
  declare isActive: boolean;
}
