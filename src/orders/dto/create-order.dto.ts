import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemDto } from "./order-item.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
   
    @ApiProperty({
        description: 'Array of order items',
        type: OrderItemDto,
        isArray: true,
        example: [{ productId: 1, quantity: 2 }]
    })
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each:true})
    @Type(()=>OrderItemDto)
    items: OrderItemDto[]

}
