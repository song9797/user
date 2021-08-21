import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from 'src/entity/user.entity';
import { BuyerDto } from 'src/dto/User.dto';

@Injectable()
export class BuyerService {
    constructor(
        @InjectRepository(Buyer)
        private BuyerRepository: Repository<Buyer>,
    ){
      this.BuyerRepository=BuyerRepository
    }

      FindAll(): Promise<Buyer[]> {
        return this.BuyerRepository.find();
      }
    
      FindOne(userId: string): Promise<Buyer> {
        return this.BuyerRepository.findOne(userId);
      }
      async Create(buyerDto:BuyerDto){
        await this.BuyerRepository.save(buyerDto);
      }
      async Update(BuyerDto:BuyerDto){
        let info;
        try {
            info = await this.BuyerRepository.update({ id: BuyerDto.userId }, BuyerDto);
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }
    async Delete(userId:string): Promise<void> {
        let info;
        try {
            info = await this.BuyerRepository.delete(userId);
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
