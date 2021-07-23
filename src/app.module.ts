import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuyerController } from './buyer/buyer.controller';
import { BuyerService } from './buyer/buyer.service';
import { SellerController } from './seller/seller.controller';
import { SellerService } from './seller/seller.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Buyer, Seller } from './user.entity';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer,Seller])],
  controllers: [AppController, BuyerController, SellerController],
  providers: [AppService, BuyerService, SellerService],
})
export class AppModule {}
