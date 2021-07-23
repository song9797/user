import { Controller, Get, Query, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { SellerDto } from 'dto/User.dto'; 
import { SellerService } from './seller.service';
import { Seller } from 'interface/user.interface';
@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){}

    @Get('/:id')
    async findAll(): Promise<any[]> {
        return [];}

    async Findone(@Param('id') id:string){
        return await this.sellerService.FindOne(id);
    }

    @Post('Create')
    async Create(@Body() sellerDto: SellerDto){
        await this.sellerService.Create(sellerDto);
    }

    // @Put('/:id')
    // async Updateall(@Param('id') id: string, @Body() updatesellerDto: SellerDto){}

    @Patch('/:id')
    async Update(@Param('id') id: string, @Body() updatesellerDto: SellerDto){
        return this.sellerService.Update(id,updatesellerDto);
    }

    @Delete('/:id')
    async Delete(@Param('id') id:string){
        return this.sellerService.Delete(id);
    }
}
