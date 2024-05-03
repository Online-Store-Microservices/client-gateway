import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
    @ApiProperty({ 
        description: 'Name of the product', 
        type: String,
        minLength: 1,
        example: 'Example Product' 
    })
    @IsString()
    public name: string;

    @ApiProperty({ 
        description: 'Price of the product (minimum value: 0)', 
        type: Number,
        minimum: 0,
        example: 10.99 
    })
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    public price : number;
}
