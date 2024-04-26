import { IsEnum } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum";

export class StatusDto {
    @IsEnum(OrderStatusList,{
        message: `Possible status values are ${OrderStatusList}`
    })
    status: OrderStatus;

}
