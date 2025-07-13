import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './services/users.service';

@Controller('auth')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Post('signup')
    async signup( @Body() createUserDto: CreateUserDto) {
        return this.userService.signup(createUserDto);
    }
    @Post('signin')
    async signin(@Body() loginUserDto: LoginUserDto) {
        return this.userService.signin(loginUserDto);
    }
}