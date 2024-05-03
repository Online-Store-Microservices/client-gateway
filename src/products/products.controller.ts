import {  Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { CreateProductDto, UpdateProductDto } from './dto';
import { PaginationDto } from 'src/common';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto){
    try {
      return await firstValueFrom(
        this.client.send('create_product',createProductDto)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAllProducts(@Query() paginationDto: PaginationDto){
    try {
      return await firstValueFrom(
        this.client.send('find_all_products',paginationDto)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async finOnedProduct(@Param('id',ParseIntPipe) id: number){
    try {
      return await firstValueFrom(
        this.client.send('find_one_product',{id})
      );
    } catch (error) {  
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id',ParseIntPipe) id: number){
    try {
      return await firstValueFrom(
        this.client.send('delete_product',{id})
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async updateProduct(
    @Param('id',ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto
  ){
    try {
      return await firstValueFrom(
        this.client.send('update_product',{id,...updateProductDto})
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
