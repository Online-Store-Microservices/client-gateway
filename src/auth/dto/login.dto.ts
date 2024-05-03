import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ description: 'Email address of the user', example: 'example2@example.com' })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password of the user (minimum length: 8)', example: 'password123' })
    @IsString()
    @MinLength(8)
    password: string;
}
