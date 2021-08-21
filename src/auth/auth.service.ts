import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuyerService } from 'src/buyer/buyer.service';

import { Buyer, Seller } from 'src/entity/user.entity';
import { SellerService } from 'src/seller/seller.service';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Seller)
        private SellerRepository: Repository<Seller>,
        @InjectRepository(Buyer)
        private BuyerRepository: Repository<Buyer>,
        private readonly sellerService: SellerService,
        private readonly buyerSerivce:BuyerService
    ){}
    authseller(userId:string,password:string){
        
        try{
            this.sellerService.FindOne(userId)
        }catch(error){
            throw new NotFoundException('Could not find Seller_ID Info');
        }
    }
    
    authbuyer(userId:string,password:string){
        try{
            this.buyerSerivce.FindOne(userId)
        }catch(error){
            throw new NotFoundException('Could not find Seller_ID Info');
        }
    }
     signin: string = 'SELECT CASE (SELECT COUNT(*) FROM user)';
}
