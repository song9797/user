import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuyerController } from './buyer/buyer.controller';
import { BuyerService } from './buyer/buyer.service';
import { SellerController } from './seller/seller.controller';
import { SellerService } from './seller/seller.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Buyer, Seller } from './entity/user.entity';
// import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthSellerService } from './auth-seller/auth-seller.service';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer,Seller])],
  controllers: [AppController, BuyerController, SellerController, AuthController],
  providers: [AppService, BuyerService, SellerService, AuthService, AuthSellerService],
})
export class AppModule {}
