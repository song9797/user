import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Get('seller')
    async sellerAuth(@Param('userId') user_id:string,@Param('password') password:string){
        return await this.authService.authseller(user_id,password);
    }
    @Get('buyer')
    async buyerAuth(@Param('userId') user_id:string,@Param('password') password:string){
        return await this.authService.authbuyer(user_id,password);
    }
}
