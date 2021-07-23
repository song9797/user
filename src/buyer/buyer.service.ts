import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from 'src/user.entity';
import { BuyerDto } from 'dto/User.dto';

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
    
      FindOne(id: string): Promise<Buyer> {
        return this.BuyerRepository.findOne(id);
      }
      async Create(buyerDto:BuyerDto){
        await this.BuyerRepository.save(buyerDto);
      }
      async Update(id:string,buyerDto:BuyerDto){
        await this.BuyerRepository.update(id,buyerDto)
      }

      async Delete(id: string): Promise<void> {
        await this.BuyerRepository.delete(id);
      }
}
