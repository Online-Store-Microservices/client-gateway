import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
    @ApiProperty({ 
        description: 'Name of the user', 
        type: String,
        minLength: 1,
        example: 'John Doe' 
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ 
        description: 'Email address of the user', 
        type: String,
        format: 'email',
        example: 'example@example.com' 
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ 
        description: 'Password of the user (minimum length: 8)', 
        type: String,
        minLength: 8,
        example: 'password123' 
    })
    @IsString()
    @MinLength(8)
    password: string;
}
