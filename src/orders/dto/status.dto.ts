import { IsEnum } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum";
import { ApiProperty } from "@nestjs/swagger";

export class StatusDto {
    @ApiProperty({
        description: 'Status of the order',
        enum: OrderStatusList,
        default: OrderStatus.PENDING,
        example: OrderStatus.PENDING,
        required: false
    })
    @IsEnum(OrderStatusList,{
        message: `Possible status values are ${OrderStatusList}`
    })
    status: OrderStatus;

}
