import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from 'src/user.entity';
import { SellerDto } from 'dto/User.dto';
@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private SellerRepository: Repository<Seller>,
    ){}

    FindAll(): Promise<Seller[]> {
        return this.SellerRepository.find();
    }
    
    async FindOne(id: string): Promise<Seller> {
        return await this.SellerRepository.findOne(id);
    }

    async Create(sellerDto:SellerDto){
        await this.SellerRepository.save(sellerDto)
    }
    async Update(id: string, sellerDto:SellerDto){
        await this.SellerRepository.update(id,sellerDto);
    }
    async Delete(id: string): Promise<void> {
        await this.SellerRepository.delete(id);
    }
}
