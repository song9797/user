import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { BuyerDto } from 'src/dto/User.dto';
import { Buyer, BuyerDocument } from 'src/schemas/buyer.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BuyerService {
    constructor(
        @InjectModel(Buyer.name) private buyerModel: Model<BuyerDocument>)  
    {}

    //   async FindAll(): Promise<Buyer[]> {
    //     return this.buyerModel.find();
    //   }
    
      async FindOne(userId: string): Promise<Buyer> {
        return this.buyerModel.findOne({userId});
      }

      async Create(buyer:BuyerDto){
        const info = new this.buyerModel(buyer);
        return info.save();
      }

      async Update(Buyer:BuyerDto){
        let info;
        try {
            info = await this.buyerModel.updateOne({ userid: Buyer.userId }, Buyer);
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }

    async Delete(userId:string){
        let info;
        try {
            info = await this.buyerModel.deleteOne({userId});
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
