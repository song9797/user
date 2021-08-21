import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Buyer{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({length:20})
    name: string;
    @Column({length:20})
    password: string;
    @Column({length:50})
    address: string;
    @Column({length:11})
    phonenumber: string;
}
@Entity()
export class Seller{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({length:20})
    name: string;
    @Column({length:20})
    password: string;
    @Column({length:11})
    phonenumber: string;
    @Column({length:40})
    business_number: string;
    @Column({length:10})
    account_number: number;
}
