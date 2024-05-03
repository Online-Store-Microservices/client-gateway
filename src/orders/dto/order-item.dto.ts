import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class OrderItemDto {
    @ApiProperty({ description: 'ID of the product', example: 1 })
    @IsNumber()
    @IsPositive()
    productId: number;

    @ApiProperty({ description: 'Quantity of the product', example: 2 })
    @IsNumber()
    @IsPositive()
    quantity: number;
}