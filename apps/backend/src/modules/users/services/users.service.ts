import { SigninDto, SignupDto } from '@learning-angular-nest-nx/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    async signup(dto: SignupDto) {
        console.log("Hello there signup!")
        console.log(dto);
        return {message: "signup response from nest!!!"}
    }
    async signin(dto: SigninDto) {
        console.log("Hello there signin!")
        console.log(dto)
        return {message: "signin response from nest!!!"}
    }
}