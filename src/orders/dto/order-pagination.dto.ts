import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderStatus, OrderStatusList } from "../enum";
import { ApiProperty } from "@nestjs/swagger";

export class OrderPaginationDto extends PaginationDto {
    @ApiProperty({
        description: 'Status of the order',
        enum: OrderStatusList,
        default: OrderStatus.PENDING,
        example: OrderStatus.PENDING,
        required: false
    })
    @IsEnum(OrderStatusList, {
        message: `Possible status values are ${OrderStatusList}`
    })
    @IsOptional()
    status: OrderStatus = OrderStatus.PENDING;

}