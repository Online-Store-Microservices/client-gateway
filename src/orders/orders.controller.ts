import { Controller, Get, Post, Body, Patch, Param, Inject, Query, ParseUUIDPipe } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';
import { NATS_SERVICE } from 'src/config';
import { firstValueFrom } from 'rxjs';
import { OrderPaginationDto, StatusDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return await firstValueFrom(
        this.client.send('create_order',createOrderDto)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll(@Query() paginationDto: OrderPaginationDto) {
    try {   
      return await firstValueFrom(
        this.client.send('find_all_orders',paginationDto)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id',ParseUUIDPipe) id: string) {
    try {
      return await firstValueFrom(
        this.client.send('find_one_order',{id})
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async changeStatus(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() body : StatusDto
  ) {
    try {
      return await firstValueFrom(
        this.client.send('change_order_status',{id,status: body.status})
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

}
