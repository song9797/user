import { Controller, Get, Query, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { BuyerDto } from 'dto/User.dto';
import { BuyerService } from './buyer.service';
import { Buyer } from 'interface/user.interface';

@Controller('buyer')
export class BuyerController {
    constructor(private readonly buyerSerivce:BuyerService){}
    /*구매자 전체 조회*/
    @Get('/:id')
    async findAll(): Promise<Buyer[]> {
        const buyerdata = await this.buyerSerivce.FindAll();
        return Object.assign({
            data: buyerdata,
            
        });}

    async Findone(@Param('id') id:string){
        return await this.buyerSerivce.FindOne(id);
    }
    /*구매자 정보 생성*/
    @Post('Create')
    async Create(@Body() createbuyerDto: BuyerDto){
        await this.buyerSerivce.Create(createbuyerDto)
    }

    // @Put('/:id')
    // async Updateall(@Body() updatebuyerDto : BuyerDto){}

    @Patch('/:id')
    async Update(@Param() id:string, @Body() updatebuyerDto: BuyerDto){
        await this.buyerSerivce.Update(id,updatebuyerDto);
    }

    @Delete('/:id')
    async Delete(@Param('id') id){
        await this.buyerSerivce.Delete(id);
    }
    

}
