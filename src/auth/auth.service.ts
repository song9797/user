import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Buyer, Seller } from 'src/entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Seller)
        private SellerRepository: Repository<Seller>,
        @InjectRepository(Buyer)
        private BuyerRepository: Repository<Buyer>
    ){}
     signin: string = 'SELECT CASE (SELECT COUNT(*) FROM user)';
}
