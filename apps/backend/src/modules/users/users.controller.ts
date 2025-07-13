import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { SigninDto, SignupDto } from '@learning-angular-nest-nx/shared';

@Controller('auth')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Post('signup')
    async signup( @Body() createUserDto: SignupDto) {
        return this.userService.signup(createUserDto);
    }
    @Post('signin')
    async signin(@Body() loginUserDto: SigninDto) {
        return this.userService.signin(loginUserDto);
    }
}