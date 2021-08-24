import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { SellerDto } from 'src/dto/User.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Seller, SellerDocument } from 'src/schemas/seller.schema';
import { Model } from 'mongoose';
@Injectable()
export class SellerService {
    constructor(
        @InjectModel(Seller.name)
        private sellerModel: Model<SellerDocument>
    ){}

    async FindAll(): Promise<Seller[]> {
        return this.sellerModel.find();
    }
    
    async FindOne(userId: string): Promise<Seller> {
        return await this.sellerModel.findOne({userId});
    }

    async Create(sellerDto:SellerDto){
        const info= new this.sellerModel(sellerDto)
        info.save();
    }
    async Update(sellerDto:SellerDto){
        let info;
        try {
            info = await this.sellerModel.updateOne({ userid: sellerDto.userId }, sellerDto);
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
            info = await this.sellerModel.deleteOne({userId});
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
