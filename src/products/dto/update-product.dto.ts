import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({ 
        description: 'Name of the product (optional)', 
        type: String,
        minLength: 1,
        example: 'Updated Product' 
    })
    name?: string;

    @ApiProperty({ 
        description: 'Price of the product (optional, minimum value: 0)', 
        type: Number,
        minimum: 0,
        example: 12.99 
    })
    price?: number;
}
