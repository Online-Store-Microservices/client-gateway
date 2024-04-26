import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderStatus, OrderStatusList } from "../enum";

export class OrderPaginationDto extends PaginationDto {
    @IsEnum(OrderStatusList,{
        message: `Possible status values are ${OrderStatusList}`
    })
    @IsOptional()
    status: OrderStatus = OrderStatus.PENDING;
}