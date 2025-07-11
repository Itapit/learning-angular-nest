import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class UsersService {
    async signup(dto: CreateUserDto) {
        console.log("Hello there signup!")
        console.log(dto);
    }
    async signin(dto: LoginUserDto) {
        console.log("Hello there signin!")
        console.log(dto)
    }
}