import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer, Seller } from 'src/entity/user.entity';
import { SellerDto } from 'src/dto/User.dto';
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
    async Update(sellerDto:SellerDto){
        let info;
        try {
            info = await this.SellerRepository.update({ id: sellerDto.userId }, sellerDto);
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }
    async Delete(@Param('userId') userId): Promise<void> {
        let info;
        try {
            info = await this.SellerRepository.delete(userId);
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }
}
