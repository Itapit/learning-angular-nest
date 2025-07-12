import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
    @IsString()
    @MinLength(6)
    username!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(6)
    password!: string;
}
